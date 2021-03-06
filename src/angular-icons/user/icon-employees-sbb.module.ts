import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-employees-sbb',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          stroke="#000"
          d="M18.828 25.524c5.04 2.893 7.251 8.074 7.672 13.976h-22c.1-6.054 2.798-11.216 7.634-14M31.5 6.998c-2.627 0-4.639 2.278-4.939 5.246 1.186 1.094 1.939 2.802 1.939 4.758 0 .259-.035.505-.061.755.836.77 1.882 1.245 3.061 1.245 2.849 0 5-2.665 5-6 0-3.336-2.151-6.004-5-6.004zm-11.726 5.983c.202-.269.425-.515.665-.737.836-.771 1.882-1.246 3.061-1.246 1.178 0 2.224.475 3.06 1.246 1.187 1.094 1.94 2.802 1.94 4.758 0 .259-.036.505-.06.755-.302 2.969-2.312 5.245-4.94 5.245a4.39 4.39 0 01-3.043-1.194m6.375-.304c5.039 2.893 7.247 8.095 7.668 13.996h-8.647m8.987-17.988c5.039 2.894 7.239 8.087 7.66 13.988h-8.622m-13.421-9.692L22.503 24l-.966 1.79 2.039 3.746 1.961-3.745L24.503 24l1.977-2.152m.197-10.357s1.688-.292 3.17-1.646a1.306 1.306 0 011.85.083c1.13 1.238 2.999 2.964 4.802 2.964m2.483 8.235l1.663-.599c.496-.164.606-.697.231-.994-1.448-1.148-3.988-3.392-4.377-6.642M20.5 13.5c0 .553-2.238 1-5 1-2.761 0-5-.447-5-1 0-.552 2.239-1 5-1 2.762 0 5 .448 5 1zm-10 0v6c0 .553 2.239 1 5 1 2.762 0 5-.447 5-1v-6m0 6V21c0 3.335-2.151 6-5 6s-5-2.665-5-6v-1.5m1 .6s.5 1.396 4 1.4c3.5.004 4-1.4 4-1.4"
        />
        <path
          fill="#000"
          d="M17 16h-.9l1.2 1.125h-1.425V16h-.75v1.125H13.7L14.9 16H14l-1.5 1.5L14 19h.9l-1.2-1.125h1.425V19h.75l.056-1.181 1.369.056L16.1 19h.9l1.5-1.5z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEmployeesSbbComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconEmployeesSbbComponent],
  exports: [IconEmployeesSbbComponent],
})
export class IconEmployeesSbbModule {}
