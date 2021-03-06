import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-locomotive-viaduct',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M27.501 7.494a.991.991 0 00-.691.28 1.494 1.494 0 00-.879-.71 1.49 1.49 0 00-2.86 0c-.026.009-.053.016-.079.026.002-.03.009-.058.009-.09a1.497 1.497 0 00-2.909-.496c-.031-.002-.06-.01-.091-.01a1.496 1.496 0 00-.121 2.989 1.491 1.491 0 002.371-.161 1.49 1.49 0 002.25.284 1.484 1.484 0 002.309-.392.999.999 0 10.691-1.72zM5.999 23.5h38M18.5 42.002v-13a2.5 2.5 0 10-5 0v13m19.002-11.63V29a2.5 2.5 0 00-5 0v5.117m-7.001 7.883v-13a2.5 2.5 0 115 0v7.458M44 27.501c-10.063 0-18.166 5.638-21.5 14.5h-16v-13a2.5 2.5 0 015 0v13m1.001-23.006v-7.5l7 .006v2.993h12l.001 3.007m-1.001-3.007v-3h-2v3m-5.088 7h3.088m-9.086 0h3.175m8.823 0h3.838l-1.75-3.993h-19v3.993H14.6m14.902-14a1 1 0 110 2 1 1 0 010-2zm-7.5 12a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm12 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocomotiveViaductComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconLocomotiveViaductComponent],
  exports: [IconLocomotiveViaductComponent],
})
export class IconLocomotiveViaductModule {}
