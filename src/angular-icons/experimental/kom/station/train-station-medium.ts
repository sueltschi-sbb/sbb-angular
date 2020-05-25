/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTrainStationMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path d="M28.497 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0" />
      <svg:path
        d="M28.497 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM4.5 29.25h18.752v-4.5H31.5m-14.036-15c1.926 0 2.785.822 2.785 2.667V26.25h-15V12.417c0-1.845.861-2.667 2.787-2.667h9.428m2.786 9h-15m12-13.5h-9m6.75 7.5h-4.5m-3.75 13.5v3m12-3v3M15 5.25l-2.25 3.435L10.5 5.25m6.75 17.25a.751.751 0 01-1.5 0 .75.75 0 011.5 0zm-7.5 0a.751.751 0 01-1.5 0 .75.75 0 011.5 0zm19.5-3v-3.75h-3v3.75H27V24h1.5v-4.5h.75z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTrainStationMedium {}

@Component({
  selector: 'sbb-icon-train-station-medium',
  template: ` <svg sbbIconTrainStationMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTrainStationMedium {}

@NgModule({
  declarations: [SvgIconTrainStationMedium, IconTrainStationMedium],
  exports: [SvgIconTrainStationMedium, IconTrainStationMedium],
})
export class IconTrainStationMediumModule {}
