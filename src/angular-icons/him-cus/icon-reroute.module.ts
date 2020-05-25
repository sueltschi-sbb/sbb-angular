import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-reroute',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M8.68 10.655a2.729 2.729 0 01-.68.095 2.69 2.69 0 01-.791-.13A2.744 2.744 0 015.249 8c0-.236.04-.461.096-.68l1.864 1.864 1.47 1.47.03-.008v.038l-.03-.03zm2.39.269l-1.06-1.06-1.301-1.301-1.5-1.5L6.137 5.99l-1.06-1.06-2.411-2.41-1.06 1.06 2.58 2.58A4.198 4.198 0 003.75 8a4.252 4.252 0 003.459 4.17V16h1.5v-3.821c.4-.068.777-.193 1.13-.365l3.08 3.08 1.06-1.06-2.91-2.91z"
        />
        <path
          fill="#FFF"
          d="M8.68 10.655l.029.029v-.038l-.03.009M8 5.25c.247 0 .481.043.709.104A2.746 2.746 0 0110.75 8c0 .152-.019.3-.044.445l1.202 1.202A4.17 4.17 0 0012.25 8c0-2.101-1.535-3.838-3.541-4.178V0h-1.5v3.83a4.134 4.134 0 00-.849.268l1.197 1.198c.144-.028.291-.046.443-.046"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRerouteComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconRerouteComponent],
  exports: [IconRerouteComponent],
})
export class IconRerouteModule {}
