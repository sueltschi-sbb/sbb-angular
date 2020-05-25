/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudRainSnowMoonMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.75 24l-1.5 3m2.55-11.7c-3.211 0-3.85 6.45 1.2 6.45h10.5c5.216 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85zm4.95 8.7l-1.5 3m11.813-9.743c1.891.594 6.202-.444 7.687-3.756-6.252 2.643-10.434-3.531-8.277-7.8-1.633.489-2.87 1.498-3.792 4.55M12.75 24l-3 6m10.5-4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-3 4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
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
export class SvgIconCloudRainSnowMoonMedium {}

@Component({
  selector: 'sbb-icon-cloud-rain-snow-moon-medium',
  template: ` <svg sbbIconCloudRainSnowMoonMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudRainSnowMoonMedium {}

@NgModule({
  declarations: [SvgIconCloudRainSnowMoonMedium, IconCloudRainSnowMoonMedium],
  exports: [SvgIconCloudRainSnowMoonMedium, IconCloudRainSnowMoonMedium],
})
export class IconCloudRainSnowMoonMediumModule {}
