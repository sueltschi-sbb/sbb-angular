import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-gift',
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
          d="M3.5 7.5h17v3h-17v-3zm16 3v11h-15v-11m5-3v14m5 0v-14m-2.504 0L12 4c.75-2.83 4.576-1.175 3.2 1.2l-1.7 2.3M12 4c-.757-2.846-4.553-1.222-3.2 1.2l1.7 2.3"
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
          d="M5.25 11.25h25.5v4.5H5.25v-4.5zm24 4.5v16.5H6.75v-16.5m7.5-4.5v21m7.5 0v-21m-3.756 0L18 6c1.124-4.245 6.864-1.762 4.8 1.8l-2.55 3.45M18 6c-1.136-4.269-6.83-1.833-4.8 1.8l2.55 3.45"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGiftComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconGiftComponent],
  exports: [IconGiftComponent],
})
export class IconGiftModule {}
