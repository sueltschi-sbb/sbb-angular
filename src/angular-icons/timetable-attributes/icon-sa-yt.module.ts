import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-yt',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M6.421 9.219l-3.28-8.182h2.961l2.08 5.862 4.541-5.862h3.261L9.222 9.219 8.002 15H5.201zM16.5 1.038l-.479 2.199h3.94l-2.539 11.764h2.919l2.541-11.764h3.941l.46-2.199z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaYtComponent extends IconBase {
  constructor() {
    super({ width: '28px', height: '16px', ratio: 1.75 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaYtComponent],
  exports: [IconSaYtComponent],
})
export class IconSaYtModule {}
