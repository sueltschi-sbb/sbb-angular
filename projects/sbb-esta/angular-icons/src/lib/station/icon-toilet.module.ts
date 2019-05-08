/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-toilet',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M9.75 8.25a1.5 1.5 0 1 1-3.002 0 1.5 1.5 0 0 1 3.001 0zm1.5 12v-7.5h-6v7.5h1.5v9h3v-9h1.5zm16.5 3v6h-3v-6m3-15a1.5 1.5 0 1 1-3 .001 1.5 1.5 0 0 1 3 0zm3 15l-3-10.5h-3l-3 10.5h9zM17.25 6v24"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconToiletComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconToiletComponent],
  exports: [IconToiletComponent],
})
export class IconToiletModule { }
