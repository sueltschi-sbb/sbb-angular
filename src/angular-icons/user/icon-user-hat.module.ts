import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-user-hat',
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
          d="M6.25 10.5h2.5L7.5 8.25 6.25 10.5zM7.5 8.25V5m0 0L12 3.5 16.5 5 12 6.495 7.5 5zm2 .65v2.1c1.28 1.18 3.359 1.488 5 0V5.646M9.63 7.853A3.887 3.887 0 009 9.998c0 1.91 1.321 3.5 2.991 3.5 1.671 0 3.01-1.59 3.01-3.5 0-.793-.233-1.53-.622-2.123m-4.244 4.87c-2.72.993-4.635 3.897-4.635 7.749l13 .005c0-3.532-1.817-6.688-4.636-7.764"
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
          d="M9.375 15.75h3.75l-1.875-3.375-1.875 3.375zm1.875-3.375V7.5m0 0L18 5.25l6.75 2.25L18 9.742 11.25 7.5zm3 .976v3.149c1.92 1.77 5.038 2.232 7.5 0V8.469m-7.304 3.31c-.594.894-.945 2.016-.945 3.22 0 2.864 1.981 5.25 4.486 5.25 2.507 0 4.514-2.386 4.514-5.25 0-1.19-.348-2.296-.932-3.184m-6.366 7.305c-4.08 1.488-6.953 5.844-6.953 11.622l19.5.007c0-5.298-2.725-10.032-6.954-11.646"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserHatComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconUserHatComponent],
  exports: [IconUserHatComponent],
})
export class IconUserHatModule {}
