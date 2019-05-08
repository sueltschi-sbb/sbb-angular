/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-realtime-delay',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zM10 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm.4-9.8H9.2v4.4l3.9 2.3.6-.9-3.4-2V6.2z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconRealtimeDelayComponent extends IconBase {
  constructor() {
    super({ width: '20px', height: '20px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconRealtimeDelayComponent],
  exports: [IconRealtimeDelayComponent]
})
export class IconRealtimeDelayModule {}
