/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-service-fw',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 13"><path d="M2.7 0h7.2l-.4 2H4.9l-.7 3.3h4.3l-.4 2H3.8L2.6 13H0M10.7 0h2.6l.4 10L18 0h3.5l.1 10 4.6-10H29l-6.2 13h-3.3l-.1-10.4L14.8 13h-3.2"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconServiceFwComponent extends IconBase {
  constructor() {
    super({ width: '29px', height: '13px', ratio: 2.230769230769231 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconServiceFwComponent],
  exports: [IconServiceFwComponent]
})
export class IconServiceFwModule {}
