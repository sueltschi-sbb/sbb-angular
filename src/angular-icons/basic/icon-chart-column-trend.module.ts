import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-chart-column-trend',
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
          d="M5.28 11.876L8.72 9.123 5.28 11.875a1 1 0 11-1.561 1.25 1 1 0 011.56-1.25zM18.92 4.314L15.08 9.687l3.838-5.373a1 1 0 111.162-1.628 1 1 0 01-1.162 1.628zM8.5 21.5v-7.996h2V21.5h-2zm5 0v-5.996h2V21.5h-2zM10.429 8.872l3.143 1.257-3.143-1.257zM18.5 21.5V9.504h2V21.5h-17v-3.996h2V21.5h13zm-8-13a1 1 0 11-2 0 1 1 0 012 0zm5 2a1 1 0 11-2 0 1 1 0 012 0z"
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
          d="M7.921 17.813l5.157-4.126-5.157 4.126a1.5 1.5 0 11-2.342 1.874 1.5 1.5 0 012.342-1.874zM28.378 6.471l-5.756 8.059 5.757-8.06a1.5 1.5 0 111.743-2.443 1.5 1.5 0 01-1.744 2.444zM12.75 32.25V20.256h3V32.25h-3zm7.5 0v-8.994h3v8.994h-3zm-4.607-18.943l4.715 1.886-4.715-1.886zM27.75 32.25V14.256h3V32.25H5.25v-5.994h3v5.994h19.5zm-12-19.5a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zm7.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
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
          d="M30.662 19.873a2 2 0 11-2.326 3.253 2 2 0 012.326-3.253l7.676-10.746a2 2 0 102.323-3.256 2 2 0 00-2.323 3.256l-7.676 10.746zM21.5 43.5h6v-12h4v12h6v-24h4v24h-34v-8h4v8h6v-16h4v16zm-10-18a2 2 0 11-4.001-.001 2 2 0 014.001.001zm9.837-7.207l6.326 2.415-6.326-2.415zm-10.275 5.958l6.876-5.502-6.876 5.502zM21.5 17.5a2 2 0 11-4.001-.001 2 2 0 014.001.001z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChartColumnTrendComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconChartColumnTrendComponent],
  exports: [IconChartColumnTrendComponent],
})
export class IconChartColumnTrendModule {}
