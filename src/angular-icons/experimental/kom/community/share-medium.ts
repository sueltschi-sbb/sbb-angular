/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShareMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M22.117 9.738c.5.918 1.467 1.512 2.633 1.512 1.716 0 3-1.284 3-3s-1.284-3-3-3-3 1.284-3 3a3.1 3.1 0 00.367 1.488l-9.868 5.785c-.526-.786-1.422-1.273-2.499-1.273-1.736 0-3 1.265-3 3 0 1.734 1.264 3 3 3 1.156 0 2.103-.562 2.605-1.449.254-.445.395-.972.395-1.55 0-.658-.181-1.249-.501-1.727zm.05 14.941l-9.811-5.877 9.811 5.877c.526-.903 1.462-1.43 2.583-1.43 1.675 0 3 1.325 3 3 0 1.678-1.325 3-3 3a2.968 2.968 0 01-2.991-3c0-.554.148-1.121.408-1.57z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconShareMedium {}

@Component({
  selector: 'sbb-icon-share-medium',
  template: ` <svg sbbIconShareMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShareMedium {}

@NgModule({
  declarations: [SvgIconShareMedium, IconShareMedium],
  exports: [SvgIconShareMedium, IconShareMedium],
})
export class IconShareMediumModule {}
