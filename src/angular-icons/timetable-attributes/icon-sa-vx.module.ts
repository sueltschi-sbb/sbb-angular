import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-vx',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.141 1.037h2.801l1.3 10.862h.04l5.801-10.862h3.04L8.322 15H4.981zM25.782 1.038l-3.841 4.8h-.04l-2.02-4.8H16.86l3.06 6.38-6.46 7.583h3.48l4.362-5.602h.039l2.14 5.602h3.061l-3.24-7.302 5.78-6.661z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaVxComponent extends IconBase {
  constructor() {
    super({ width: '30px', height: '16px', ratio: 1.875 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaVxComponent],
  exports: [IconSaVxComponent],
})
export class IconSaVxModule {}
