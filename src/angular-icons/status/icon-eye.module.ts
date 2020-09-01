import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-eye',
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
          d="M15.5 12a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm5 0c-.744-1.1-4.25-5.5-8.5-5.5S4.35 10.79 3.5 12c.744 1.1 4.25 5.5 8.5 5.5s7.65-4.29 8.5-5.5z"
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
          d="M23.25 18a5.25 5.25 0 10-10.5 0 5.25 5.25 0 0010.5 0zm7.5 0C29.634 16.35 24.375 9.75 18 9.75S6.525 16.185 5.25 18c1.116 1.65 6.375 8.25 12.75 8.25S29.475 19.815 30.75 18z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEyeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconEyeComponent],
  exports: [IconEyeComponent],
})
export class IconEyeModule {}
