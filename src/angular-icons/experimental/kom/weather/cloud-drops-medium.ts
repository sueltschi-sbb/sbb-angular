/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCloudDropsMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.8 15.3c-3.211 0-3.85 6.45 1.2 6.45h10.5c4.805 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85zm.45 8.7s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm6 0s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm6 0s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm-3 3s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm-6 0s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25z"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCloudDropsMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-drops-medium',
  template: ` <svg sbbIconCloudDropsMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudDropsMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCloudDropsMedium, IconCloudDropsMedium],
  exports: [SvgIconCloudDropsMedium, IconCloudDropsMedium],
})
export class IconCloudDropsMediumModule {}
