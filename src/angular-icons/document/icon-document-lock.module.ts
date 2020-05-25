import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-document-lock',
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
          d="M12 19.5H6.5v-15h6l5 5V11m0-1.5h-5v-5m-3.5 8h5m-5.002 2h3M9 16.5h3m3.5-1v-2a1 1 0 112 0v2m-1 3.5v-2.031m-3 3.531h6v-5h-6v5z"
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
          d="M18 29.25H9.75V6.75h9l7.5 7.5v2.25m0-2.25h-7.5v-7.5m-5.25 12H21m-7.504 3h4.5m-4.496 3H18m5.25-1.5v-3a1.5 1.5 0 113 0v3m-1.5 5.25v-3.047m-4.5 5.297h9v-7.5h-9v7.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentLockComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDocumentLockComponent],
  exports: [IconDocumentLockComponent],
})
export class IconDocumentLockModule {}
