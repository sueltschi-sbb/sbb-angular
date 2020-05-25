/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconMusicRockHandGestureLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M16.499 26.5v-2.536a5.98 5.98 0 002-4.464V12a1.5 1.5 0 10-3 0v7-2a1.5 1.5 0 00-3 0v2h0v-2a1.5 1.5 0 00-3 0v2-7a1.5 1.5 0 00-3 0l-.001 7.5c0 1.706.728 3.33 2.001 4.464V26.5m9 10.924l-10 .076v-11h10v10.924zm-10-8.924h10-10zm2 2.5v6.5V31zM25 29.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm13.001-4a3.5 3.5 0 11.001 6.999 3.5 3.5 0 01-.001-6.999zM28.501 33V15.443L41.502 12.5v16.809M28.501 18.443L41.502 15.5"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-leisure',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconMusicRockHandGestureLarge {}

@Component({
  selector: 'sbb-icon-music-rock-hand-gesture-large',
  template: ` <svg sbbIconMusicRockHandGestureLarge></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMusicRockHandGestureLarge {}

@NgModule({
  declarations: [SvgIconMusicRockHandGestureLarge, IconMusicRockHandGestureLarge],
  exports: [SvgIconMusicRockHandGestureLarge, IconMusicRockHandGestureLarge],
})
export class IconMusicRockHandGestureLargeModule {}
