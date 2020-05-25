/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLockerSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.5 4.5a2 2 0 10-4 0 2 2 0 004 0zm-.268-1H11.5l.984.984L11.469 5.5H6.232M2.5 21.5h19v-13h-19v13zm15-9h-11a1 1 0 00-1 1v4a1 1 0 001 1h11a1 1 0 001-1v-4a1 1 0 00-1-1zm-7.5-1h4"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLockerSmall {}

@Component({
  selector: 'sbb-icon-locker-small',
  template: ` <svg sbbIconLockerSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLockerSmall {}

@NgModule({
  declarations: [SvgIconLockerSmall, IconLockerSmall],
  exports: [SvgIconLockerSmall, IconLockerSmall],
})
export class IconLockerSmallModule {}
