import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-sh',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M11.736 3.718c-.82-.42-1.88-.721-2.9-.721-1.002 0-2.342.4-2.342 1.6 0 2.24 4.762 2.1 4.762 5.982 0 3.42-2.682 4.66-5.743 4.66-1.339 0-2.72-.32-3.98-.78l.721-2.38c1.08.5 2.22.96 3.42.96 1.341 0 2.662-.68 2.662-2.18 0-2.52-4.762-2.12-4.762-5.841 0-2.941 2.52-4.221 5.201-4.221 1.221 0 2.481.16 3.621.62l-.66 2.3zM15.994 1.037h2.801l-1.18 5.641h5.641l1.179-5.641h2.801L24.316 15h-2.801l1.28-6.121h-5.641L15.875 15h-2.801z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaShComponent extends IconBase {
  constructor() {
    super({ width: '29px', height: '16px', ratio: 1.8125 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaShComponent],
  exports: [IconSaShComponent],
})
export class IconSaShModule {}
