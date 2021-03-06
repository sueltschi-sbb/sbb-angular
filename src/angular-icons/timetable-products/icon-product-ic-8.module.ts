import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ic-8',
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
          d="M38.333 9.59a2.371 2.371 0 01-1.234-.91 2.666 2.666 0 01-.43-1.534A2.816 2.816 0 0137.9 4.75a4.28 4.28 0 012.586-.79c1.136 0 2.063.313 2.783.94a2.784 2.784 0 011.025 2.192 2.74 2.74 0 01-.433 1.558c-.298.44-.73.77-1.23.941.362.097.706.255 1.017.467.73.533 1.095 1.31 1.095 2.334a3.369 3.369 0 01-1.348 2.808c-.756.585-1.729.878-2.917.878-1.287 0-2.312-.322-3.074-.965a3.28 3.28 0 01-1.19-2.634c0-1.018.352-1.806 1.056-2.365a2.91 2.91 0 011.064-.523zm2.105.87a1.91 1.91 0 00-1.391.527 1.8 1.8 0 00-.54 1.348 1.83 1.83 0 00.547 1.377c.385.36.898.551 1.423.53.663 0 1.16-.196 1.49-.586.315-.358.486-.82.481-1.297a1.84 1.84 0 00-.552-1.376 1.984 1.984 0 00-1.458-.522zm.016-4.706c-.446-.02-.884.13-1.222.423a1.43 1.43 0 00-.465 1.112c-.02.434.152.854.469 1.15.348.3.799.455 1.257.432.455.025.902-.128 1.246-.427.312-.304.48-.728.457-1.163a1.414 1.414 0 00-.461-1.124 1.88 1.88 0 00-1.281-.403zM9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIc8Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIc8Component],
  exports: [IconProductIc8Component],
})
export class IconProductIc8Module {}
