/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconTrainMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M24 26.25l3 6m-18 0l3-6m15 3H9m19.5 3h-21m13.5-21h-6m12.75 7.5H8.25M24 3.75H12m15.75 22.5H8.25V12A3.75 3.75 0 0112 8.25h12A3.75 3.75 0 0127.75 12v14.25zM15 3.75l3 4.5m3-4.5l-3 4.5m5.25 14.25a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm-9 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTrainMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-train-medium',
  template: ` <svg sbbIconTrainMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTrainMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconTrainMedium, IconTrainMedium],
  exports: [SvgIconTrainMedium, IconTrainMedium],
})
export class IconTrainMediumModule {}
