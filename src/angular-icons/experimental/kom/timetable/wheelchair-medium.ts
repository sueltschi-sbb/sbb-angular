/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWheelchairMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15.75 12v8.25h7.5v8.25M16.5 9A.75.75 0 1115 9a.75.75 0 011.5 0zm-3.445 7.398c-1.952.994-3.297 3.024-3.297 5.352 0 3.297 2.703 6 6 6 2.39 0 4.467-1.42 5.43-3.456"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWheelchairMedium {}

@Component({
  selector: 'sbb-icon-wheelchair-medium',
  template: ` <svg sbbIconWheelchairMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairMedium {}

@NgModule({
  declarations: [SvgIconWheelchairMedium, IconWheelchairMedium],
  exports: [SvgIconWheelchairMedium, IconWheelchairMedium],
})
export class IconWheelchairMediumModule {}
