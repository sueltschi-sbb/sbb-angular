import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-hiking-boot',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M9.5 28.5v-17h12V16c0 5.375 2.5 14.5 8 14.5h5a6 6 0 016 6h-17c-2.625 0-4.875-1-8-1h-7v-7a7 7 0 017 7m-6-20h12m1.5 4h-4m21.501 17v3H23.5v-1c-2.625 0-4.875-1-8-1v2h-8v-4h1m15.5-13h-4m5 3h-4"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHikingBootComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconHikingBootComponent],
  exports: [IconHikingBootComponent],
})
export class IconHikingBootModule {}
