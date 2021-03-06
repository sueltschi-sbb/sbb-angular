import { CommonModule, Location } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SbbLinkGeneratorResult } from '@sbb-esta/angular-core/models';

import { SbbDropdownModule } from '../dropdown.module';
import {
  SbbDropdownItem,
  SbbDropdownOrigin,
  SbbDropdownTrigger,
  SBB_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER,
} from '../public-api';

import { SbbDropdown } from './dropdown.component';

@Component({
  selector: 'sbb-dropdown-test',
  template: `
    <button sbbButton type="button" [sbbDropdown]="dropdown">Open dropdown</button>
    <sbb-dropdown #dropdown="sbbDropdown">
      <a
        *ngFor="let link of links"
        sbbDropdownItem
        [routerLink]="linkGenerator(link.page).routerLink"
        [queryParams]="linkGenerator(link.page).queryParams"
        routerLinkActive="sbb-selected"
      >
        {{ link.text }}
      </a>

      <hr />
      <button sbbDropdownItem type="button" (click)="onClick()">Abmeldung</button>
    </sbb-dropdown>
  `,
})
export class DropdownTestComponent {
  @ViewChildren(SbbDropdownTrigger)
  triggers: QueryList<SbbDropdownTrigger>;

  @ViewChild(SbbDropdown, { static: true })
  dropdown: SbbDropdown;

  links: Array<any> = [
    { page: 1, text: 'Test 1' },
    { page: 2, text: 'Test 2' },
    { page: 3, text: 'Test 3' },
  ];

  linkGenerator(page: string): SbbLinkGeneratorResult {
    return {
      queryParams: { page: page },
      routerLink: ['.'],
    };
  }

  onClick() {
    console.log('Button clicked');
  }

  addNewLink() {
    this.links.push({
      page: this.links.length + 1,
      text: 'Test ' + (this.links.length + 1),
    });
  }
}

describe('SbbDropdown', () => {
  let component: SbbDropdown;
  let fixture: ComponentFixture<SbbDropdown>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SbbDropdown, SbbDropdownItem, SbbDropdownOrigin, SbbDropdownTrigger],
        imports: [CommonModule],
        providers: [SBB_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SbbDropdown test', () => {
  let component: DropdownTestComponent;
  let fixture: ComponentFixture<DropdownTestComponent>;
  let location: Location = null!;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DropdownTestComponent],
        imports: [SbbDropdownModule, RouterTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have four options', () => {
    expect(component.dropdown.options.length).toBe(4);
  });

  describe('clicking on the trigger', () => {
    it('should open the options list', () => {
      const trigger = fixture.debugElement.query(By.css('[sbbButton]'));
      trigger.nativeElement.click();
      fixture.detectChanges();
      const panel = fixture.debugElement.query(By.css('.sbb-dropdown-panel'));
      expect(panel).toBeTruthy();
      expect(component.dropdown.open).toBeTruthy();
    });

    it('should have a11y attributes correctly set', () => {
      const trigger = fixture.debugElement.query(By.css('[sbbButton]'));
      trigger.nativeElement.click();
      fixture.detectChanges();
      expect(trigger.attributes['aria-expanded']).toBeTruthy();
      expect(trigger.attributes['aria-owns']).toContain(component.dropdown.id);
    });

    it('should close the panel when clicked again', () => {
      const trigger = fixture.debugElement.query(By.css('[sbbButton]'));
      trigger.nativeElement.click();
      fixture.detectChanges();
      const panel = fixture.debugElement.query(By.css('.sbb-dropdown-panel'));
      expect(panel).toBeTruthy();
      expect(component.dropdown.open).toBeTruthy();
      trigger.nativeElement.click();
      fixture.detectChanges();
      expect(trigger.attributes['aria-expanded']).toBe('false');
      expect(component.dropdown.open).toBeFalsy();
    });
  });

  describe('clicking on the second option', () => {
    it(
      'should change location to have page 2 query parameter',
      waitForAsync(() => {
        fixture.ngZone!.run(async () => {
          const trigger = fixture.debugElement.query(By.css('[sbbButton]'));
          trigger.nativeElement.click();
          fixture.detectChanges();
          router = TestBed.inject(Router);
          router.initialNavigation();
          location = TestBed.inject(Location);
          fixture.detectChanges();
          await fixture.whenStable();
          const links = fixture.debugElement.queryAll(By.css('[sbbDropdownItem]'));
          fixture.detectChanges();
          links[1].nativeElement.click();
          await fixture.whenStable();
          expect(location.path()).toContain('?page=2');
        });
      })
    );

    it(
      'should apply sbb-selected class on the 2nd option',
      waitForAsync(() => {
        fixture.ngZone!.run(async () => {
          const trigger = fixture.debugElement.query(By.css('[sbbButton]'));
          trigger.nativeElement.click();
          fixture.detectChanges();
          router = TestBed.inject(Router);
          router.initialNavigation();
          location = TestBed.inject(Location);
          fixture.detectChanges();
          await fixture.whenStable();
          const links = fixture.debugElement.queryAll(By.css('[sbbDropdownItem]'));
          fixture.detectChanges();
          links[1].nativeElement.click();
          await fixture.whenStable();
          expect(links[1].classes['sbb-selected']).toBeTruthy();
        });
      })
    );
  });

  describe('adding a new link', () => {
    it('should add a new option', () => {
      expect(component.dropdown.options.length).toBe(4);
      component.addNewLink();
      fixture.detectChanges();
      expect(component.dropdown.options.length).toBe(5);
    });
  });
});
