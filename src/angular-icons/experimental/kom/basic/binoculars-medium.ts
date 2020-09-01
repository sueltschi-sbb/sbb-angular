/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconBinocularsMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15.752 27c0 2.931-2.321 5.25-5.252 5.25A5.21 5.21 0 015.25 27c0-2.931 2.319-5.242 5.25-5.242s5.252 2.311 5.252 5.242zm15 0c0 2.931-2.321 5.25-5.252 5.25A5.21 5.21 0 0120.25 27c0-2.931 2.319-5.242 5.25-5.242s5.252 2.311 5.252 5.242zm-7.502.002c0-1.258.994-2.249 2.25-2.249m-15.002 0a2.23 2.23 0 00-2.248 2.25m-3-.003l1.5-12.75 3-1.5 1.5-6h4.5v5.306M30.752 27l-1.5-12.75-3-1.5-1.5-6h-4.5L20.25 12m-7.5 7.5c0-2.931 2.319-5.244 5.25-5.244s5.252 2.313 5.252 5.244M15.75 27V14.768M20.25 27l-.001-12.232"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconBinocularsMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-binoculars-medium',
  template: ` <svg sbbIconBinocularsMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBinocularsMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconBinocularsMedium, IconBinocularsMedium],
  exports: [SvgIconBinocularsMedium, IconBinocularsMedium],
})
export class IconBinocularsMediumModule {}
