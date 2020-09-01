/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSaGr]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M14.823 3.998c-1.08-.7-2.42-1.001-3.88-1.001C7.54 2.997 5.4 5.658 5.4 8.959c0 2.26 1.56 4.081 3.941 4.081.64 0 1.06 0 1.38-.141l.78-3.7h-2.96l.46-2.201h5.661l-1.6 7.622c-.82.34-2.382.62-3.74.62-4.103 0-6.843-1.881-6.843-6.201 0-5.102 3.341-8.242 8.382-8.242 1.561 0 3.2.22 4.661.78l-.7 2.421zM20.38 6.998h1.02c1.502 0 3.322-.46 3.322-2.3 0-1.461-1.261-1.461-2.401-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.562-.04 5.562 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.759.04 1.24.519 1.42 1.28L26.322 15H23.38l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L18.66 15h-2.8l2.92-13.963z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 29px;
        height: 16px;
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
    viewBox: '0 0 29 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaGr {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-gr',
  template: ` <svg sbbIconSaGr></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGr {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaGr, IconSaGr],
  exports: [SvgIconSaGr, IconSaGr],
})
export class IconSaGrModule {}
