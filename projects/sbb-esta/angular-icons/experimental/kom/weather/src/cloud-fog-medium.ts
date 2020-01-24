/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudFogMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.8 15.3c-.348-2.913 2.819-4.473 4.8-2.85 2.25-5.1 9.6-2.55 7.95 3 3.75-.15 3.932 6.3-1.05 6.3H12c-5.05 0-4.411-6.45-1.2-6.45zm-3.3 9.45h19.49H7.5zm1.5 3h16.49H9z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCloudFogMedium {}

@Component({
  selector: 'sbb-icon-cloud-fog-medium',
  template: `
    <svg sbbIconCloudFogMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudFogMedium {}

@NgModule({
  declarations: [SvgIconCloudFogMedium, IconCloudFogMedium],
  exports: [SvgIconCloudFogMedium, IconCloudFogMedium]
})
export class IconCloudFogMediumModule {}