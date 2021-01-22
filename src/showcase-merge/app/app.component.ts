import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Breakpoints, ɵtriggerVariantCheck } from '@sbb-esta/angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { ROUTER_ANIMATION } from './shared/animations';
// @ts-ignore versions.ts is generated automatically by bazel
import { angularVersion, libraryVersion } from './versions';

@Component({
  selector: 'sbb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ROUTER_ANIMATION],
  host: {
    '[class.sbb-standard]': "sbbMode.value === 'standard'",
    '[class.sbb-lean]': "sbbMode.value === 'lean'",
  },
})
export class AppComponent implements AfterContentInit, OnDestroy {
  angularVersion = angularVersion;
  showcaseVersion = libraryVersion;
  expanded: boolean = true;
  sbbMode: FormControl = new FormControl('standard');
  private _destroyed = new Subject();

  constructor(private _breakpointObserver: BreakpointObserver) {
    // Trigger variant check after css classes have been rendered.
    // Variant check depends on css classes of this component.
    this.sbbMode.valueChanges.subscribe(() => setTimeout(() => ɵtriggerVariantCheck.next()));
  }

  ngAfterContentInit(): void {
    this._breakpointObserver
      .observe([Breakpoints.Mobile, Breakpoints.Tablet, Breakpoints.Desktop])
      .pipe(
        map((r) => r.matches),
        distinctUntilChanged(),
        takeUntil(this._destroyed)
      )
      .subscribe((shouldCollapse) => {
        this.expanded = !shouldCollapse;
      });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
