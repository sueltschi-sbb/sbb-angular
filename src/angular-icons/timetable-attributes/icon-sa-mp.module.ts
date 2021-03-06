import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-mp',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M4.581 1.037h4.621l.94 10.063h.04l5.502-10.063h4.66L17.363 15h-2.96l2.64-11.563h-.039L10.682 15h-2.68L6.881 3.437h-.04L4.28 15H1.62zM24.701 7.498h1c1.54 0 3.121-.8 3.121-2.54 0-1.421-1.14-1.721-2.34-1.721h-.88l-.9 4.261zM23.101 15h-2.8l2.96-13.963h2.36c2.58 0 6.121.14 6.121 3.621 0 3.38-2.78 5.041-5.9 5.041h-1.62L23.1 15z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaMpComponent extends IconBase {
  constructor() {
    super({ width: '33px', height: '16px', ratio: 2.0625 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaMpComponent],
  exports: [IconSaMpComponent],
})
export class IconSaMpModule {}
