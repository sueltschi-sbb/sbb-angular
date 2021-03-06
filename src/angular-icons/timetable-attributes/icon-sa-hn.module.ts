import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-hn',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M4.541 1.037h2.801L6.161 6.678h5.642l1.179-5.641h2.801L12.862 15h-2.8l1.28-6.121H5.701L4.421 15H1.62zM18.94 1.037h3.54l2.981 10.603h.041l2.28-10.603h2.64L27.402 15H23.8L20.88 4.298h-.04L18.62 15h-2.681z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaHnComponent extends IconBase {
  constructor() {
    super({ width: '32px', height: '16px', ratio: 2 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaHnComponent],
  exports: [IconSaHnComponent],
})
export class IconSaHnModule {}
