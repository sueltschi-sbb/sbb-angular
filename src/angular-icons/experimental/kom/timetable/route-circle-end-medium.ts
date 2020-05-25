/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconRouteCircleEndMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M30.75 18.75a9 9 0 11-18 0 9 9 0 0118 0zm-18 0H4.5h8.25z" />
      <svg:path fill="#000" d="M27 18.75a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconRouteCircleEndMedium {}

@Component({
  selector: 'sbb-icon-route-circle-end-medium',
  template: ` <svg sbbIconRouteCircleEndMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRouteCircleEndMedium {}

@NgModule({
  declarations: [SvgIconRouteCircleEndMedium, IconRouteCircleEndMedium],
  exports: [SvgIconRouteCircleEndMedium, IconRouteCircleEndMedium],
})
export class IconRouteCircleEndMediumModule {}
