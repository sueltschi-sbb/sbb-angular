/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCloudSnowflakeSunSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M16.02 14.384c2.145-.702 1.878-4.172-.32-4.084 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.433-.042-3.2 1.9-1.9 0-2.449 3.385-.197 4.149m10.336-2.962c1.266-.352 2.16-1.489 2.16-2.887 0-1.69-1.308-3-3-3-.992 0-1.854.451-2.395 1.167M11.5 11v7m-3.486-3.5h7m-5.99-2.475l4.95 4.95m-4.935 0l4.95-4.95"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCloudSnowflakeSunSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-snowflake-sun-small',
  template: ` <svg sbbIconCloudSnowflakeSunSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudSnowflakeSunSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCloudSnowflakeSunSmall, IconCloudSnowflakeSunSmall],
  exports: [SvgIconCloudSnowflakeSunSmall, IconCloudSnowflakeSunSmall],
})
export class IconCloudSnowflakeSunSmallModule {}
