/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconExclamationPointSmall]',
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M12.905 5.436v4.156l-.464 6.031h-.881l-.446-6.031V5.436h1.79zM11.003 19v-1.911h1.995V19h-1.995z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconExclamationPointSmall {}

@Component({
  selector: 'sbb-icon-exclamation-point-small',
  template: `
    <svg sbbIconExclamationPointSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconExclamationPointSmall {}

@NgModule({
  declarations: [SvgIconExclamationPointSmall, IconExclamationPointSmall],
  exports: [SvgIconExclamationPointSmall, IconExclamationPointSmall]
})
export class IconExclamationPointSmallModule {}