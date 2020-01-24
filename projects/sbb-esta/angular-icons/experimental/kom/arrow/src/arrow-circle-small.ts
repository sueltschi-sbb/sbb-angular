/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowCircleSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.5 5v4.5H15M19.264 14c-.81 3.283-3.614 5.5-7.264 5.5-4.35 0-7.5-3.15-7.5-7.5 0-4.348 3.15-7.5 7.5-7.5 3.37 0 6.478 2.125 7.5 5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconArrowCircleSmall {}

@Component({
  selector: 'sbb-icon-arrow-circle-small',
  template: `
    <svg sbbIconArrowCircleSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowCircleSmall {}

@NgModule({
  declarations: [SvgIconArrowCircleSmall, IconArrowCircleSmall],
  exports: [SvgIconArrowCircleSmall, IconArrowCircleSmall]
})
export class IconArrowCircleSmallModule {}