import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ic-9',
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
          d="M36.528 12.897h2.176c.178.897.696 1.345 1.553 1.345.446.015.876-.165 1.178-.495.303-.33.535-.842.698-1.538.114-.497.19-1.003.229-1.511-.28.427-.65.787-1.084 1.056a2.72 2.72 0 01-1.352.312 3.41 3.41 0 01-3.228-2.096 4.414 4.414 0 01-.367-1.803c0-1.303.444-2.357 1.332-3.164a3.926 3.926 0 012.743-1.045 3.828 3.828 0 011.822.443c.562.3 1.043.732 1.403 1.258.667.965 1.001 2.32 1.001 4.066 0 1.614-.294 2.99-.883 4.13-.767 1.481-1.929 2.222-3.484 2.222-1.036 0-1.891-.288-2.567-.862a3.396 3.396 0 01-1.17-2.318zm3.831-6.985a1.58 1.58 0 00-1.253.61c-.353.443-.535.999-.513 1.566-.008.48.12.952.37 1.36a1.65 1.65 0 002.744.15 2.42 2.42 0 00.465-1.487 2.476 2.476 0 00-.48-1.542 1.598 1.598 0 00-1.333-.657zM9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIc9Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIc9Component],
  exports: [IconProductIc9Component],
})
export class IconProductIc9Module {}
