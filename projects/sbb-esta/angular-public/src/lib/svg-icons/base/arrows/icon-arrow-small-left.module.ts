/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-arrow-small-left',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.3 7.7l.7.7-3.6 3.6 3.6 3.6-.7.7L9 12l4.3-4.3z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowSmallLeftComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconArrowSmallLeftComponent],
  exports: [IconArrowSmallLeftComponent]
})
export class IconArrowSmallLeftModule {}
