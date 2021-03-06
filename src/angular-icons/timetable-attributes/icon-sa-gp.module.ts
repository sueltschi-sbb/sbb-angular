import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-gp',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 16"
    >
      <path
        fill-rule="evenodd"
        d="M14.823 3.998c-1.08-.7-2.42-1.001-3.88-1.001C7.54 2.997 5.4 5.658 5.4 8.959c0 2.26 1.56 4.081 3.941 4.081.64 0 1.06 0 1.38-.141l.78-3.7h-2.96l.46-2.201h5.661l-1.6 7.622c-.82.34-2.382.62-3.74.62-4.103 0-6.843-1.881-6.843-6.201 0-5.102 3.341-8.242 8.382-8.242 1.561 0 3.2.22 4.661.78l-.7 2.421zm5.438 3.5h1c1.54 0 3.12-.8 3.12-2.54 0-1.421-1.14-1.721-2.34-1.721h-.88l-.9 4.261zM18.66 15h-2.8l2.96-13.963h2.36c2.582 0 6.122.14 6.122 3.621 0 3.38-2.78 5.041-5.901 5.041h-1.62L18.66 15z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGpComponent extends IconBase {
  constructor() {
    super({ width: '29px', height: '16px', ratio: 1.8125 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaGpComponent],
  exports: [IconSaGpComponent],
})
export class IconSaGpModule {}
