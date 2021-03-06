import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-document-check',
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
          d="M6.496 4.5l.004 15h11l-.002-10.006L12.5 4.5H6.496zM8 13.5h3m-3 3h3m1-3.5l1 1 3-3m-4 5l1 1 3-3m-3.5-9.5v5l4.998-.006"
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
          d="M9.743 6.75l.006 22.5h16.5l-.003-15.009L18.75 6.75H9.743zM12 20.25h4.5m-4.5 4.5h4.5M18 19.5l1.5 1.5 4.5-4.5M18 24l1.5 1.5L24 21M18.75 6.75v7.5l7.497-.009"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentCheckComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconDocumentCheckComponent],
  exports: [IconDocumentCheckComponent],
})
export class IconDocumentCheckModule {}
