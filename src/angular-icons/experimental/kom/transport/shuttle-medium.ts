/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShuttleMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.75 21.75v3h4.5v-3m13.501 0v3h4.499v-3m-3.75-15h-15m18.75 7.501H6.75m0-3h-1.5v1.5h1.5m18.75-9c2.559 0 3.75 1.19 3.75 3.75v14.25H6.75V7.5c0-2.56 1.19-3.75 3.75-3.75h15zM11.25 18a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm15 0a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm3-5.25h1.5v-1.5h-1.5M7.125 30.75H15m-5.034-2.778L7.125 30.75l2.844 2.763m18.906-2.777H21m5.035 2.778l2.84-2.778-2.845-2.763"
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
export class SvgIconShuttleMedium {}

@Component({
  selector: 'sbb-icon-shuttle-medium',
  template: ` <svg sbbIconShuttleMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShuttleMedium {}

@NgModule({
  declarations: [SvgIconShuttleMedium, IconShuttleMedium],
  exports: [SvgIconShuttleMedium, IconShuttleMedium],
})
export class IconShuttleMediumModule {}
