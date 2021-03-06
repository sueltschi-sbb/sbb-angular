import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-location-pin-map',
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
        <path
          fill="none"
          stroke="#000"
          d="M18.5 9V7.3l-5-2.7-5 4-5-3.6v8.75l5 3.65 5-4 .8.9M8.5 8.6v8.8m5-12.8v8.8m6.997-.212c0-1.485-1.118-2.688-2.497-2.688-1.378 0-2.496 1.204-2.496 2.688.016.461.143.85.347 1.215l2.157 3.665 2.155-3.665c.201-.38.33-.774.334-1.215zM18.5 13a.5.5 0 01-.495.5.508.508 0 01-.505-.5c0-.273.227-.5.5-.5s.5.227.5.5z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M27.75 13.5v-2.55l-7.5-4.05-7.5 6-7.5-5.4v13.125l7.5 5.475 7.5-6 1.2 1.35m-8.7-8.55v13.2m7.5-19.2v13.2m10.496-.317c0-2.228-1.677-4.032-3.746-4.032-2.067 0-3.744 1.804-3.744 4.032.024.691.215 1.273.52 1.822l3.236 5.498 3.233-5.498c.301-.57.495-1.162.5-1.822zM27.75 19.5a.75.75 0 01-.742.75.763.763 0 01-.758-.75c0-.41.34-.75.75-.75s.75.34.75.75z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinMapComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinMapComponent],
  exports: [IconLocationPinMapComponent],
})
export class IconLocationPinMapModule {}
