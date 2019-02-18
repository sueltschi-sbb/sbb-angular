/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-nj',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 13"><path d="M2.7 0H6l2.7 9.7L10.8 0h2.4l-2.8 12.8H7.2L4.5 3l-2 9.8H0M20.3 0l-1.8 8.7c-.5 2.5-1.3 4.3-4.2 4.3-.7 0-1.4-.1-2.1-.3l.6-2.2c.3.1.7.2 1.2.2 1.4 0 1.8-1 2-2.2L17.7 0h2.6z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceNjComponent extends IconBase {
  constructor() {
    super({ width: '21px', height: '13px', ratio: 1.6153846153846154 });
  }
}

@NgModule({
  declarations: [IconServiceNjComponent],
  exports: [IconServiceNjComponent],
})
export class IconServiceNjModule { }
