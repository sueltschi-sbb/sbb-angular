/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconButtonPowerSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14.997 7.39A5.501 5.501 0 0117.5 12c0 3.033-2.468 5.5-5.5 5.5A5.506 5.506 0 016.5 12c0-1.925.997-3.617 2.5-4.6M12 5v5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconButtonPowerSmall {}

@Component({
  selector: 'sbb-icon-button-power-small',
  template: ` <svg sbbIconButtonPowerSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonPowerSmall {}

@NgModule({
  declarations: [SvgIconButtonPowerSmall, IconButtonPowerSmall],
  exports: [SvgIconButtonPowerSmall, IconButtonPowerSmall],
})
export class IconButtonPowerSmallModule {}
