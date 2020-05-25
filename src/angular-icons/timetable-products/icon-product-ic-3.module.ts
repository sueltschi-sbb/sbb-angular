import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ic-3',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M36.575 7.898a4.345 4.345 0 01.702-2.389c.715-1.034 1.79-1.55 3.224-1.55 1.104 0 1.995.282 2.673.846a2.952 2.952 0 011.095 2.373 2.594 2.594 0 01-.429 1.499 2.108 2.108 0 01-1.163.85c.59.123 1.114.461 1.47.95.37.518.559 1.143.54 1.78a3.545 3.545 0 01-1.261 2.807c-.778.675-1.76 1.013-2.948 1.013-1.288 0-2.31-.372-3.063-1.115-.754-.744-1.131-1.749-1.131-3.014v-.15h2.215c0 .711.168 1.261.504 1.649.364.4.889.613 1.427.581.615 0 1.088-.182 1.42-.546.301-.335.465-.774.457-1.226a1.687 1.687 0 00-.584-1.352c-.32-.275-.814-.412-1.482-.412-.187 0-.374.01-.56.032v-1.7c.137.01.268.015.394.015 1.325 0 1.987-.493 1.987-1.48a1.358 1.358 0 00-.433-1.047 1.621 1.621 0 00-1.144-.4 1.575 1.575 0 00-1.253.507c-.294.337-.452.83-.473 1.479h-2.184zM9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIc3Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIc3Component],
  exports: [IconProductIc3Component],
})
export class IconProductIc3Module {}
