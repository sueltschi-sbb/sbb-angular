import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-qrcode',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M17 16.004h-1v1.998h1v1h-2v-2h-1v1.002h-1v1h-1v-2h1v-1l3-.002v-1.998h1v1.998h1v1h-1v-.998zM5.999 12v-.997h2v1H6v.997H4.999v-1h1zm-2 2h1v2.003h-2v-1l1-.002v-1h-1v-2.001h1v2zm3-6h1v1h-1V10h-2V9H4V8H3V6h1v1h1v2h1.999v-.997h-1v-2l-1-.003V5h2v1.003h1v-1h1V5h2v1h-2v1.002h-2V8zM20 10.003h-1V8.001h2v1l-1 .002v1h1v2.001h-1v-2zM10 14h4v-4h-4v4zm-1 1V9h6v6H9zm2-2v-2h2v2h-2zM6.999 3.996V2.995H10v1.001H6.999zm5 1.007v-.002h-1v-1h1v-.998h1v2h-1zm8.001 2V6.002h1v1.001h-1zm-2 5v.999h-2v-1h2v-.998h1v1h-1zm-14.001-8v1h-1V2.995h3v1l-2 .008zm14.001 9h3v2h-1v-1h-1v1h-1v-2zm-5-8h1v-1h1v.998h1V3.003h1v.998h1v1h-1v1l-3 .002v1h-1v-2zm3 2h1v.999h1v1h-1v.002h-1v-2zm1 14.002v-2h1v2h-1zm3-1.003v-.997h1v2h-1v-.003h-1v-1h1zm0-14.999V4.001h-2v-1h2v.002h1v2h-1zm0 10v1.999h1v1h-1v1h-2v-1h1v-2.998h1zm-3-8.002v-1h2v1h-2zm-6 14.001v-1.001h2v1.001h-2zm-1-13v-1h1v-.999h1v2h-1v-.002h-1zm0 11v-.997h1V20.005h-1v-.003H9v-1h1zm5 .003v.997h1v1h-1v.003h-1v-2h1zm-7.001-4.003v1h1v1h-2v-.998h-1v-1l2-.002zm2.001 2v-1h2v1h-2zm6-6.001v-1h2v1h-2zm-13.001 7v-1h1v1h-1zM14 8.002V7.001h1v1.001h-1zM3.999 12.001v-1h1v1h-1zm-1-1v-2h1v2h-1zm2 7.002v-1H7v1H4.999zm2 .999v-.998h2v1h-1v1.998h-1v-.997h-1v-1h1v-.003zm-3 0v1.003h2v1h-2v-.003h-1v-2h1zm2-4.998v-1h2v1h-2z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill-rule="evenodd"
          d="M25.5 24.006H24v2.997h1.5v1.5h-3v-3H21v1.503h-1.5v1.5H18v-3h1.5v-1.5l4.5-.003v-2.997h1.5v2.997H27v1.5h-1.5v-1.497zM8.998 18v-1.495h3v1.5H9v1.495H7.498v-1.5h1.5zm-3 3.002h1.5v3.003h-3v-1.5l1.5-.003v-1.5h-1.5v-3.002h1.5v3.002zm4.5-9.002h1.5v1.5h-1.5V15h-3v-1.5H6V12H4.5V9H6v1.5h1.5v3h2.998v-1.496h-1.5v-3L7.498 9V7.5h3v1.504h1.5v-1.5h1.5v-.003h3v1.5h-3v1.503h-3v1.498zM30 15.005h-1.5v-3.003h3v1.5l-1.5.003v1.5h1.5v3.001H30v-3.001zM15 21h6v-6h-6v6zm-1.5 1.5v-9h9v9h-9zm3-3v-3h3v3h-3zM10.498 5.994V4.492H15v1.502h-4.502zM18 7.504v-.002h-1.5v-1.5H18V4.505h1.5v3H18zm12.001 3V9.004h1.5v1.502H30zm-3 7.501v1.497h-3v-1.5h3v-1.497h1.5v1.5H27zm-21.002-12v1.5h-1.5V4.493h4.5v1.5l-3 .012zM27 19.505h4.5v3H30v-1.5h-1.5v1.5H27v-3zm-7.5-12H21v-1.5h1.5v1.497H24V4.505h1.5v1.497H27v1.5h-1.5v1.5l-4.5.003v1.5h-1.5v-3zm4.5 3h1.5v1.497H27v1.5h-1.5v.003H24v-3zm1.5 21.002v-3H27v3h-1.5zm4.5-1.504v-1.496h1.5v3H30v-.004h-1.5v-1.5H30zm0-22.498V6.002h-3v-1.5h3v.003h1.5v3H30zm0 15v2.997h1.5v1.5H30v1.5h-3v-1.5h1.5v-4.497H30zm-4.5-12.003v-1.5h3v1.5h-3zm-9 21.001v-1.502h3v1.502h-3zM15 12.002v-1.5h1.5V9.005H18v3h-1.5v-.003H15zm0 16.5v-1.495h1.5v3H15v-.004h-1.5v-1.5H15zm7.5.005v1.495H24v1.5h-1.5v.005H21v-3h1.5zm-10.502-6.004v1.5h1.5v1.5h-3v-1.497h-1.5v-1.5l3-.003zm3.002 3v-1.5h3v1.5h-3zm9-9.002v-1.5h3v1.5h-3zm-19.502 10.5v-1.5h1.5v1.5h-1.5zM21 12.004v-1.502h1.5v1.502H21zM5.998 18.001v-1.5h1.5v1.5h-1.5zm-1.5-1.5v-3h1.5v3h-1.5zm3 10.503v-1.5H10.5v1.5H7.498zm3 1.499v-1.497h3v1.5h-1.5v2.997h-1.5v-1.496h-1.5v-1.5h1.5v-.004zm-4.5 0v1.504h3v1.5h-3v-.004h-1.5v-3h1.5zm3-7.497v-1.5h3v1.5h-3z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQrcodeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconQrcodeComponent],
  exports: [IconQrcodeComponent],
})
export class IconQrcodeModule {}
