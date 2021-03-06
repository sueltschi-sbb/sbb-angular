import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wheelchair-inaccessible',
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
          d="M5 8l12.5 12.5m-2-5v-2h-2m-3-3V8m-2.28 3.22A4.003 4.003 0 006.5 14.5c0 2.2 1.801 4 4 4a3.999 3.999 0 003.276-1.724M11 6a.5.5 0 11-1 0 .5.5 0 011 0zm4.5 12.5v.5"
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
          d="M7.5 12l18.75 18.75m-3-7.5v-3h-3m-4.5-4.5V12m-3.42 4.83a6.005 6.005 0 00-2.581 4.92c0 3.3 2.703 6 6 6 2.03 0 3.828-1.028 4.915-2.585M16.5 9A.75.75 0 1115 9a.75.75 0 011.5 0zm6.75 18.75v.75"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairInaccessibleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconWheelchairInaccessibleComponent],
  exports: [IconWheelchairInaccessibleComponent],
})
export class IconWheelchairInaccessibleModule {}
