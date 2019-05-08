/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-circle-plus',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M18.75 5.25c6.627 0 12 5.373 12 12 0 6.628-5.373 12-12 12s-12-5.372-12-12c0-6.627 5.373-12 12-12zm-6.75 12h13.5m-6.75-6.75V24"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCirclePlusComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCirclePlusComponent],
  exports: [IconCirclePlusComponent],
})
export class IconCirclePlusModule { }
