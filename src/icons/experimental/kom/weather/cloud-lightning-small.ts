/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudLightningSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15 14.5c3.228 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9-2.141 0-2.567 4.3.8 4.3m5-1L10.5 16h2.169l-3.33 2.715L11 16.5H8.5l3-3H13z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCloudLightningSmall {}

@Component({
  selector: 'sbb-icon-cloud-lightning-small',
  template: `
    <svg sbbIconCloudLightningSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudLightningSmall {}

@NgModule({
  declarations: [SvgIconCloudLightningSmall, IconCloudLightningSmall],
  exports: [SvgIconCloudLightningSmall, IconCloudLightningSmall]
})
export class IconCloudLightningSmallModule {}