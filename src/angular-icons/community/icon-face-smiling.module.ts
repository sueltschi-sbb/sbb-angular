import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-face-smiling',
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
          d="M20.5 12c0 4.746-3.754 8.5-8.5 8.5S3.5 16.746 3.5 12c0-4.747 3.754-8.5 8.5-8.5s8.5 3.753 8.5 8.5zM7.447 14.5c.762 1.77 2.482 3 4.553 3 2.072 0 3.79-1.23 4.553-3M9 8.5a.5.5 0 100 1 .5.5 0 000-1m6 0a.5.5 0 100 1 .5.5 0 000-1"
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
          d="M30.75 18c0 7.12-5.631 12.75-12.75 12.75S5.25 25.12 5.25 18 10.881 5.25 18 5.25 30.75 10.88 30.75 18zm-19.58 3.75c1.143 2.655 3.723 4.5 6.83 4.5 3.108 0 5.686-1.845 6.83-4.5m-11.33-9a.75.75 0 100 1.5.75.75 0 000-1.5m9 0a.75.75 0 100 1.5.75.75 0 000-1.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFaceSmilingComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconFaceSmilingComponent],
  exports: [IconFaceSmilingComponent],
})
export class IconFaceSmilingModule {}
