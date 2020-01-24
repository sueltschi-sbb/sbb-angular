/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconProductGex]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:rect width="59" height="20" fill="#EB0000" rx="2" />
      <svg:path
        fill="#FFF"
        fill-rule="nonzero"
        d="M9.856 9.605h5.173l-1.041 4.977a9.019 9.019 0 01-2.244 1.005 9.107 9.107 0 01-2.708.411c-1.43 0-2.526-.324-3.289-.973-1.04-.886-1.561-2.17-1.561-3.853a8.093 8.093 0 01.67-3.244 6.597 6.597 0 012.287-2.896 5.96 5.96 0 013.486-1.03c1.335 0 2.406.312 3.213.935.807.622 1.342 1.53 1.605 2.722l-2.216.253a2.799 2.799 0 00-.942-1.48 2.612 2.612 0 00-1.637-.498 3.805 3.805 0 00-3.62 2.46 6.843 6.843 0 00-.544 2.746c0 .976.221 1.697.663 2.164.442.467 1.088.7 1.94.7a5.996 5.996 0 001.57-.217 7.07 7.07 0 001.387-.518l.355-1.725h-2.95l.403-1.939zm5.602 6.196l2.413-11.6h8.572l-.402 1.938h-6.19l-.552 2.635h5.985l-.402 1.939h-5.986l-.725 3.149h6.727l-.41 1.939h-9.03zm12.172 0h-3.076l5.102-5.872-2.87-5.728h2.484l1.127 2.176.773 1.606c.04.069.074.14.103.214.641-.786 1.18-1.43 1.616-1.931L34.711 4.2H37.7l-5.292 6.108 2.847 5.492h-2.681l-.867-1.75c-.453-.922-.752-1.584-.9-1.985a24.619 24.619 0 01-1.585 1.93l-1.592 1.805z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 59px;
        height: 20px;
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
    viewBox: '0 0 59 20',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-products',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconProductGex {}

@Component({
  selector: 'sbb-icon-product-gex',
  template: `
    <svg sbbIconProductGex></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconProductGex {}

@NgModule({
  declarations: [SvgIconProductGex, IconProductGex],
  exports: [SvgIconProductGex, IconProductGex]
})
export class IconProductGexModule {}