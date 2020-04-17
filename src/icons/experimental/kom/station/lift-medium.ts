/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLiftMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M4.125 30.375h17.25V5.625H4.125v24.75zM25.318 9L28.5 5.817 31.68 9m0 18.001l-3.18 3.182L25.318 27m-11.07-17.25a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zm1.5 11.999v-7.5h-6v7.5h1.5v6h3v-6h1.5z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconLiftMedium {}

@Component({
  selector: 'sbb-icon-lift-medium',
  template: `
    <svg sbbIconLiftMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLiftMedium {}

@NgModule({
  declarations: [SvgIconLiftMedium, IconLiftMedium],
  exports: [SvgIconLiftMedium, IconLiftMedium]
})
export class IconLiftMediumModule {}