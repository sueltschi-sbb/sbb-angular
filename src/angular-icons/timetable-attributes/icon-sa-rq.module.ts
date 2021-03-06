import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-rq',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M5.941 6.998h1.02c1.501 0 3.321-.46 3.321-2.3 0-1.461-1.26-1.461-2.4-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.561-.04 5.561 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.76.04 1.24.519 1.42 1.28L11.882 15h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L4.22 15h-2.8L4.34 1.037zm13.18 8.562c0 1.82.92 3.44 2.94 3.44 3.202 0 4.982-3.84 4.982-6.621 0-1.86-.96-3.421-2.982-3.421-3.26 0-4.94 3.782-4.94 6.602m10.842-2.881a9.32 9.32 0 01-2.34 6.182c-1.46 1.62-3.581 2.34-5.921 2.34-3.442 0-5.502-2.48-5.502-5.801 0-2.22.78-4.381 2.2-6.041 1.521-1.74 3.462-2.601 5.741-2.601 3.782 0 5.822 2.2 5.822 5.92"
        />
        <path d="M22.741 12.309l2.233 2.69h3.37l-3.515-3.482z" />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaRqComponent extends IconBase {
  constructor() {
    super({ width: '30px', height: '16px', ratio: 1.875 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaRqComponent],
  exports: [IconSaRqComponent],
})
export class IconSaRqModule {}
