import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-le',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M4.421 1.037h2.801L4.721 12.8h5.481l-.48 2.2H1.46zM14.56 1.037h8.222l-.419 2.2h-5.462l-.721 3.441h4.883l-.441 2.201H15.72L14.9 12.8h5.522l-.48 2.2H11.62z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaLeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '16px', ratio: 1.5 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaLeComponent],
  exports: [IconSaLeComponent],
})
export class IconSaLeModule {}
