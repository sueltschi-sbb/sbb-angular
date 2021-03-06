import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-ym',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M6.421 9.219l-3.28-8.182h2.961l2.08 5.862 4.541-5.862h3.261L9.222 9.219 8.002 15H5.201zM17.921 1.037h4.621l.94 10.063h.04l5.502-10.063h4.66L30.703 15h-2.96l2.64-11.563h-.039L24.022 15h-2.68L20.221 3.437h-.04L17.62 15h-2.66z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaYmComponent extends IconBase {
  constructor() {
    super({ width: '35px', height: '16px', ratio: 2.1875 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaYmComponent],
  exports: [IconSaYmComponent],
})
export class IconSaYmModule {}
