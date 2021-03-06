import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-punctuality',
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
          <path
            d="M3.5 13.5c0-.168.005-.334.015-.5M11 5.515c.166-.01.332-.015.5-.015m0 0a8 8 0 11-8 8m8-8V3m-1.5.5h3m-5 10l2.5 3 5.5-6"
          />
          <path stroke-dasharray="1 1" d="M3.648 11.958a8.005 8.005 0 016.831-6.393" />
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
          <path
            d="M5.25 20.25c0-.252.008-.501.022-.75M16.5 8.273c.249-.015.498-.022.75-.022m0 0c6.627 0 12 5.372 12 12 0 6.626-5.373 12-12 12s-12-5.374-12-12m12-12.001V4.5M15 5.25h4.5m-7.5 15l3.75 4.5 8.25-9"
          />
          <path stroke-dasharray="1 1" d="M5.473 17.937C6.455 12.906 10.58 9 15.719 8.347" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPunctualityComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconPunctualityComponent],
  exports: [IconPunctualityComponent],
})
export class IconPunctualityModule {}
