/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLinkSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.268 10.94l-.707-.708a3.01 3.01 0 00-4.243 0l-4.242 4.243a3.009 3.009 0 000 4.243l.707.706a3.01 3.01 0 004.242 0l2.48-2.48m-1.773-3.883l.707.707a3.008 3.008 0 004.242 0l4.243-4.244a3.008 3.008 0 000-4.241l-.707-.708a3.009 3.009 0 00-4.243 0L11.5 7.051"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLinkSmall {}

@Component({
  selector: 'sbb-icon-link-small',
  template: ` <svg sbbIconLinkSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkSmall {}

@NgModule({
  declarations: [SvgIconLinkSmall, IconLinkSmall],
  exports: [SvgIconLinkSmall, IconLinkSmall],
})
export class IconLinkSmallModule {}
