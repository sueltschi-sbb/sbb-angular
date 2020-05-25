/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPreviousSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.501 12v6.5l-5-3.25-5-3.25 5-3.25 5-3.25V12zM4.5 18.5v-13h3v13h-3z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-audio',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconPreviousSmall {}

@Component({
  selector: 'sbb-icon-previous-small',
  template: ` <svg sbbIconPreviousSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPreviousSmall {}

@NgModule({
  declarations: [SvgIconPreviousSmall, IconPreviousSmall],
  exports: [SvgIconPreviousSmall, IconPreviousSmall],
})
export class IconPreviousSmallModule {}
