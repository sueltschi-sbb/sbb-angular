import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-context-menu',
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
            fill="#000"
            d="M13.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 7a1.5 1.5 0 11-2.999.001A1.5 1.5 0 0113.5 19z"
          />
          <path
            stroke="#000"
            d="M13.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 7a1.5 1.5 0 11-2.999.001A1.5 1.5 0 0113.5 19z"
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
            fill="#000"
            d="M20.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5A2.249 2.249 0 0118 30.75a2.249 2.249 0 110-4.5 2.25 2.25 0 012.25 2.25z"
          />
          <path
            stroke="#000"
            d="M20.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5A2.249 2.249 0 0118 30.75a2.249 2.249 0 110-4.5 2.25 2.25 0 012.25 2.25z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconContextMenuComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconContextMenuComponent],
  exports: [IconContextMenuComponent],
})
export class IconContextMenuModule {}
