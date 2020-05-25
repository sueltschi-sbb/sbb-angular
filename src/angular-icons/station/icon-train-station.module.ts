import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-train-station',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path d="M18.998 9a.5.5 0 11-1 0 .5.5 0 011 0" />
          <path
            d="M18.998 9a.5.5 0 11-1 0 .5.5 0 011 0zM3 19.5h12.501v-3H21m-9.357-10c1.284 0 1.857.548 1.857 1.778V17.5h-10V8.278c0-1.23.574-1.778 1.858-1.778h6.285m1.857 6h-10m8-9h-6m4.5 5H7m-2.5 9v2m8-2v2M10 3.5L8.5 5.79 7 3.5M11.5 15a.5.5 0 11-1.002-.002A.5.5 0 0111.5 15zm-5 0a.5.5 0 11-1.002-.002A.5.5 0 016.5 15zm13-2v-2.5h-2V13h.5v3h1v-3h.5z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path d="M28.497 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0" />
          <path
            d="M28.497 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM4.5 29.25h18.752v-4.5H31.5m-14.036-15c1.926 0 2.785.822 2.785 2.667V26.25h-15V12.417c0-1.845.861-2.667 2.787-2.667h9.428m2.786 9h-15m12-13.5h-9m6.75 7.5h-4.5m-3.75 13.5v3m12-3v3M15 5.25l-2.25 3.435L10.5 5.25m6.75 17.25a.751.751 0 01-1.5 0 .75.75 0 011.5 0zm-7.5 0a.751.751 0 01-1.5 0 .75.75 0 011.5 0zm19.5-3v-3.75h-3v3.75H27V24h1.5v-4.5h.75z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTrainStationComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTrainStationComponent],
  exports: [IconTrainStationComponent],
})
export class IconTrainStationModule {}
