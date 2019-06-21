/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-service-1',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 13"><path d="M0 0h10.8v13H0V0zm1.2 11.8h8.4V1.2H1.2v10.6z"/><path d="M5.8 10.6V4.3L4.4 5.7l-.8-1.2 2.3-2.1h1.3v8.3H5.8"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconService1Component extends IconBase {
  constructor() {
    super({ width: '11px', height: '13px', ratio: 0.8461538461538461 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconService1Component],
  exports: [IconService1Component]
})
export class IconService1Module {}