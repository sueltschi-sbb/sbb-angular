import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-arrows-circle',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M4.51 12a7.5 7.5 0 017.514-7.486c2.912.006 6.238 2.346 7.466 4.986m.01-4.49l-.01 4.49H15m4.5 2.5a7.51 7.51 0 01-7.539 7.48c-2.894-.01-6.214-2.353-7.451-4.97M4.5 19l.01-4.49L9 14.5"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M6.765 18c.012-6.213 5.058-11.241 11.27-11.23 4.369.01 9.358 3.52 11.2 7.48m.015-6.735l-.015 6.735H22.5M29.25 18c-.024 6.22-5.087 11.245-11.308 11.221-4.341-.015-9.322-3.531-11.177-7.456M6.75 28.5l.015-6.735 6.735-.015"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowsCircleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconArrowsCircleComponent],
  exports: [IconArrowsCircleComponent],
})
export class IconArrowsCircleModule {}
