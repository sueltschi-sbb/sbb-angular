import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-station-surrounding-area',
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
          d="M4 16.887c-.947.468-1.5 1.021-1.5 1.612 0 1.645 4.232 3 9.5 3 5.269 0 9.5-1.355 9.5-3 0-.59-.553-1.144-1.5-1.61M11 8l1 1 1.5-1.5m2 1.5c0 1.953-1.547 3.5-3.5 3.5A3.475 3.475 0 018.5 9c0-1.953 1.547-3.5 3.5-3.5s3.5 1.547 3.5 3.5zm-10-3.7v13.2h4v-2.991h5V18.5h4V5.3c-5.972-2.437-6.971-2.395-13 0z"
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
          d="M6 25.331c-1.42.702-2.25 1.532-2.25 2.418 0 2.468 6.348 4.5 14.25 4.5 7.904 0 14.25-2.032 14.25-4.5 0-.886-.83-1.716-2.25-2.416M16.5 12l1.5 1.5 2.25-2.25m3 2.25c0 2.93-2.32 5.25-5.25 5.25s-5.25-2.32-5.25-5.25S15.07 8.25 18 8.25s5.25 2.32 5.25 5.25zm-15-5.55v19.8h6v-4.486h7.5v4.486h6V7.95c-8.958-3.655-10.456-3.593-19.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconStationSurroundingAreaComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconStationSurroundingAreaComponent],
  exports: [IconStationSurroundingAreaComponent],
})
export class IconStationSurroundingAreaModule {}
