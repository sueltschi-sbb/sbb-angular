/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSpeechBubbleGroupEmptySmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.5 4.5h8v5H6.75L4.5 11.75V9.5h-1v-5zm13 8v6h-2v2.25l-2.25-2.25H7.5v-6h9zm4-7v4h-1v2.25L17.25 9.5H14.5v-4h6z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSpeechBubbleGroupEmptySmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-speech-bubble-group-empty-small',
  template: ` <svg sbbIconSpeechBubbleGroupEmptySmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSpeechBubbleGroupEmptySmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSpeechBubbleGroupEmptySmall, IconSpeechBubbleGroupEmptySmall],
  exports: [SvgIconSpeechBubbleGroupEmptySmall, IconSpeechBubbleGroupEmptySmall],
})
export class IconSpeechBubbleGroupEmptySmallModule {}
