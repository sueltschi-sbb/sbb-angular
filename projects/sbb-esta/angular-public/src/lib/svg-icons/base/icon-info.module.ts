/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-info',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.47 7.59A1.57 1.57 0 1 1 12 9.17a1.57 1.57 0 0 1-1.53-1.58zm-.86 9.76h1v-6.79h-1a.31.31 0 1 1 0-.62h3.82v7.41h1a.31.31 0 0 1 0 .62H9.61a.31.31 0 1 1 0-.62z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconInfoComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconInfoComponent],
  exports: [IconInfoComponent]
})
export class IconInfoModule {}
