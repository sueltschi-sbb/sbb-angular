/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaZm]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M4.22 1.037h9.583l-.48 2.2L4.9 12.8h6.36l-.46 2.2H1l.44-2.2 8.402-9.563H3.74zM15.96 1.037h4.622l.94 10.063h.04l5.502-10.063h4.66L28.743 15h-2.96l2.64-11.563h-.04L22.062 15h-2.68L18.26 3.437h-.04L15.66 15H13z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 33px;
        height: 16px;
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
    viewBox: '0 0 33 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaZm {}

@Component({
  selector: 'sbb-icon-sa-zm',
  template: `
    <svg sbbIconSaZm></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaZm {}

@NgModule({
  declarations: [SvgIconSaZm, IconSaZm],
  exports: [SvgIconSaZm, IconSaZm]
})
export class IconSaZmModule {}