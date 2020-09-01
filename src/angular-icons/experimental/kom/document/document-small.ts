/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconDocumentSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M6.509 4.5h5.99l5 5v10h-11l.01-15zm5.991 0v5h5" />
      <svg:path
        fill="#000"
        d="M12.8 14l1.601 1.5H12.5V14h-1v1.5H9.6l1.6-1.5H10l-2 2 2 2h1.2l-1.6-1.5h1.9V18h1v-1.5h1.901L12.8 18H14l2-2-2-2z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconDocumentSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-document-small',
  template: ` <svg sbbIconDocumentSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconDocumentSmall, IconDocumentSmall],
  exports: [SvgIconDocumentSmall, IconDocumentSmall],
})
export class IconDocumentSmallModule {}
