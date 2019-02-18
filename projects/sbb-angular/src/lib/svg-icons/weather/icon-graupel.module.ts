/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-graupel',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.639 8.814a2.085 2.085 0 0 0-1.326-.957c.295-1.886-.826-3.215-2.104-3.685-1.291-.475-3.019-.2-4.003 1.42a2.456 2.456 0 0 0-2.222.082c-.779.427-1.25 1.203-1.297 2.092-1.046.278-1.655 1.392-1.655 2.474 0 .725.255 1.395.717 1.888C7.12 12.526 7.814 13 9 13h7c1.174 0 2.139-.521 2.646-1.429.489-.871.486-1.953-.007-2.757zm-.865 2.269c-.33.591-.96.917-1.774.917H9c-.665 0-1.176-.187-1.522-.556-.288-.306-.446-.734-.446-1.204 0-.757.437-1.54 1.168-1.54h.564l-.067-.56c-.083-.686.205-1.28.768-1.59.421-.23 1.067-.315 1.618.137l.509.417.265-.603c.656-1.483 1.982-1.766 3.007-1.39 1.015.373 1.828 1.46 1.357 3.046l-.2.67.699-.028c.604-.021.908.28 1.066.538.302.493.297 1.194-.012 1.746z"/><circle cx="16.5" cy="14.5" r=".5"/><circle cx="12.5" cy="14.5" r=".5"/><circle cx="8.5" cy="14.5" r=".5"/><circle cx="10.5" cy="16.5" r=".5"/><circle cx="14.5" cy="16.5" r=".5"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGraupelComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  declarations: [IconGraupelComponent],
  exports: [IconGraupelComponent],
})
export class IconGraupelModule { }
