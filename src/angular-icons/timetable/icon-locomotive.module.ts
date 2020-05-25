import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-locomotive',
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
          d="M11.5 15.5H18l-3-6h-3.5v6zm-9.5 5h4.5v-15H2m0-2.001h10m-5.5 14.5h3M9.5 5.5v15l6 .001c4.582.002 6.936-.857 5.375-4.784L17.312 8.53C16.235 6.574 14.765 5.468 11.5 5.5h-2z"
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
          d="M17.25 23.25H27l-4.5-9h-5.25v9zM3 30.75h6.75V8.25H3m0-3.002h15M9.75 27h4.5m0-18.75v22.5l9 .002c6.873.003 10.404-1.286 8.063-7.176l-5.345-10.78c-1.616-2.935-3.82-4.594-8.718-4.546h-3z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocomotiveComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLocomotiveComponent],
  exports: [IconLocomotiveComponent],
})
export class IconLocomotiveModule {}
