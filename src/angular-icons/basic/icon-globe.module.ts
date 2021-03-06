import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-globe',
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
          d="M19.5 11.5a8 8 0 10-16 0 8 8 0 0016 0zm-1 4.029h-14m15-4h-16m15-4h-14m4.37 11.52c-1.52-1.813-2.487-4.52-2.487-7.548 0-3.03.967-5.736 2.487-7.55m0 0C7.35 5.765 6.383 8.472 6.383 11.5c0 3.029.967 5.735 2.487 7.549m5.26-15.097c1.52 1.812 2.487 4.52 2.487 7.548 0 3.029-.966 5.735-2.486 7.549m0 0c1.52-1.813 2.486-4.52 2.486-7.548 0-3.03-.966-5.736-2.486-7.55m-2.631-.45v16"
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
          d="M29.25 17.25c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-1.5 6.044h-21m22.5-6h-24m22.5-6h-21m6.554 17.279c-2.28-2.72-3.73-6.78-3.73-11.322 0-4.544 1.45-8.604 3.73-11.324m0 0c-2.28 2.719-3.73 6.78-3.73 11.323s1.45 8.602 3.73 11.323m7.892-22.645c2.28 2.718 3.73 6.78 3.73 11.322 0 4.543-1.45 8.602-3.73 11.323m0 0c2.28-2.72 3.73-6.78 3.73-11.322 0-4.544-1.45-8.604-3.73-11.324M17.25 5.25v24"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGlobeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconGlobeComponent],
  exports: [IconGlobeComponent],
})
export class IconGlobeModule {}
