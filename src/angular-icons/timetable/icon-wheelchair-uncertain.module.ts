import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wheelchair-uncertain',
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
          d="M6.5 8v5.5h5V19m-6.802-8.067A4.013 4.013 0 002.5 14.5c0 2.198 1.8 4 4 4a4.013 4.013 0 003.619-2.304m7.426.8v2M17.5 15c0-1.497.057-2.13 1-3.2l1.5-1.5c1.736-1.94.807-3.727-.475-4.411-2.063-1.006-5.025-.197-5.025 3.11M7 6a.5.5 0 11-1 0 .5.5 0 011 0z"
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
          d="M9.75 12v8.25h7.5v8.25M7.047 16.4c-1.952.992-3.297 3.023-3.297 5.351 0 3.297 2.701 6 6 6 2.39 0 4.467-1.419 5.428-3.456m11.14 1.202v3M26.25 22.5c0-2.246.085-3.195 1.5-4.8L30 15.45c2.604-2.91 1.21-5.59-.712-6.617-3.095-1.509-7.538-.295-7.538 4.667M10.5 9A.75.75 0 119 9a.75.75 0 011.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairUncertainComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconWheelchairUncertainComponent],
  exports: [IconWheelchairUncertainComponent],
})
export class IconWheelchairUncertainModule {}
