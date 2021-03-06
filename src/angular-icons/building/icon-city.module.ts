import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-city',
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
          d="M17.5 17v-2 2zm0-4v-2 2zm2 4v-2 2zm0-4v-2 2zm-6 4v-2 2zm0-4v-2 2zm0-4V7v2zm-2 8v-2 2zm0-4v-2 2zm0-4V7v2zm-2 8v-2 2zm0-4v-2 2zm0-4V7v2zM6 8.5H4h2zm0-3H4h2zm0 6H4h2zm0 3H4h2zm9.5 5h-8 8zm-8-2h-5 5zm14 2h-6 6zM2.5 22V3.5l5-1v19m0 .5V4.5h8V22m0-13.5h6V22"
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
          d="M26.25 25.5v-3 3zm0-6v-3 3zm3 6v-3 3zm0-6v-3 3zm-9 6v-3 3zm0-6v-3 3zm0-6v-3 3zm-3 12v-3 3zm0-6v-3 3zm0-6v-3 3zm-3 12v-3 3zm0-6v-3 3zm0-6v-3 3zM9 12.75H6h3zm0-4.5H6h3zm0 9H6h3zm0 4.5H6h3zm14.25 7.5h-12 12zm-12-3h-7.5 7.5zm21 3h-9 9zM3.75 33V5.25l7.5-1.5v28.5m0 .75V6.75h12V33m0-20.25h9V33"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M36.5 38.5h6-6zm-13-1h13-13zm-18 1h16-16zm4-25.5v2-2zm3 0v2-2zm3 0v2-2zm-6 4v2-2zm3 0v2-2zm3 0v2-2zm-6 4v2-2zm3 0v2-2zm3 0v2-2zm-6 4.001v2-2zm3 0v2-2zm3 0v2-2zm-6 4v2-2zm3 0v2-2zm3 0v2-2zM25.502 14v2-2zm3 0v2-2zm3 0v2-2zm-6 4v2-2zm3 0v2-2zm3 0v2-2zm-6 4v2-2zm3 0v2-2zm3 0v2-2zm-6 4.001v2-2zm3 0v2-2zm3 0v2-2zm-6 4v2-2zm3 0v2-2zm3 0v2-2zM34.502 14v2-2zm0 4v2-2zm0 4v2-2zm0 4.001v2-2zm0 4v2-2zm-9.001 4v2-2zm3 0v2-2zm3 0v2-2zm3.001 0v2-2zm-25.002-1v1.5-1.5zm3 0v1.5-1.5zm3 0v1.5-1.5zm23.002-11v2-2zm0 4v2-2zm0 4v2-2zm2-8v2-2zm0 4v2-2zm0 4v2-2zm-2 4v2-2zm2 0v2-2zM17.5 34.5v-26l-10 1.982V34.5m16 6.5V12.5h13V41M25 12.5l1-3h8l1 3m1.5 8h6V41m-6-23.5h4v3m-17-3h-4v17m2 6.5v-6.5h-16V41"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCityComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCityComponent],
  exports: [IconCityComponent],
})
export class IconCityModule {}
