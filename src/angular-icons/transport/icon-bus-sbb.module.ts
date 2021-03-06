import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-bus-sbb',
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
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M4.5 18.5v2h3v-2m9.001 0v2H19.5v-2M17 5.5H7m12.5 6h-15m3 4.5A.5.5 0 106.498 16 .5.5 0 007.5 16zm10 0a.5.5 0 10-1.002.001A.5.5 0 0017.5 16zM17 3.5c1.706 0 2.5.794 2.5 2.5v12.5h-15V6c0-1.706.794-2.5 2.5-2.5h10zm-12.5 6h-1v1h1m15 0h1v-1h-1"
          />
          <path
            fill="#000"
            d="M12.8 13l1.601 1.5H12.5V13h-1v1.5H9.6l1.6-1.5H10l-2 2 2 2h1.2l-1.6-1.5h1.9V17h1v-1.5h1.901L12.8 17H14l2-2-2-2z"
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
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M6.75 27.75v3h4.5v-3m13.502 0v3h4.498v-3M25.5 8.25h-15m18.75 9.001H6.75M11.25 24a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm15 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0zM25.5 5.25c2.559 0 3.75 1.191 3.75 3.75v18.75H6.75V9c0-2.559 1.191-3.75 3.75-3.75h15zm-18.75 9h-1.5v1.5h1.5m22.5 0h1.5v-1.5h-1.5"
          />
          <path
            fill="#000"
            d="M19.2 19.5l2.401 2.25H18.75V19.5h-1.5v2.25H14.4l2.4-2.25H15l-3 3 3 3h1.8l-2.4-2.25h2.85v2.25h1.5v-2.25h2.851L19.2 25.5H21l3-3-3-3z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBusSbbComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconBusSbbComponent],
  exports: [IconBusSbbComponent],
})
export class IconBusSbbModule {}
