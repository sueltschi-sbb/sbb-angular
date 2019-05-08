/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-telephone-gsm',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M9.75 30.75h16.5v-24H9.75v24zm9-24v-1.5h3v1.5m-.75 15h3m-7.5 0h3m-7.5 0h3m-3 3h3m-3 3h3m1.5 0h3m-3-3h3m1.5 0h3m-3 3h3m-11.25-9h10.5v-9h-10.5v9z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTelephoneGsmComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTelephoneGsmComponent],
  exports: [IconTelephoneGsmComponent],
})
export class IconTelephoneGsmModule { }
