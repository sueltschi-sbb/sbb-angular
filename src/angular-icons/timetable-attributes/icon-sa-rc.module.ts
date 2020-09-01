import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-rc',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
    >
      <path
        fill-rule="evenodd"
        d="M5.941 6.998h1.02c1.501 0 3.321-.46 3.321-2.3 0-1.461-1.26-1.461-2.4-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.561-.04 5.561 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.76.04 1.24.519 1.42 1.28L11.882 15h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L4.22 15h-2.8L4.34 1.037zm21.662 2.78c-.641-.439-1.701-.82-3.201-.82-3.101 0-5.281 2.341-5.281 5.621 0 2.341 1.52 4.422 3.98 4.422 1.18 0 2.14-.38 2.94-.86l-.44 2.68c-1.02.28-2.1.38-3.16.38-4.221 0-6.241-2.84-6.241-6.622 0-4.5 3.06-7.822 8.002-7.822 1.4 0 2.88.18 4.1.681l-.7 2.34z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaRcComponent extends IconBase {
  constructor() {
    super({ width: '28px', height: '16px', ratio: 1.75 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaRcComponent],
  exports: [IconSaRcComponent],
})
export class IconSaRcModule {}
