/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArchiveBoxMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12 17.7h7.5m6.75-4.5h-21m10.8-6h-6.3l-4.5 6v18h21l4.5-6v-18H24.15m-12.899 6l6-7.5 6 7.5M18.9 7.764l2.85-3.562 5.806 7.258M26.25 31.201v-18l4.5-6"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconArchiveBoxMedium {}

@Component({
  selector: 'sbb-icon-archive-box-medium',
  template: ` <svg sbbIconArchiveBoxMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArchiveBoxMedium {}

@NgModule({
  declarations: [SvgIconArchiveBoxMedium, IconArchiveBoxMedium],
  exports: [SvgIconArchiveBoxMedium, IconArchiveBoxMedium],
})
export class IconArchiveBoxMediumModule {}
