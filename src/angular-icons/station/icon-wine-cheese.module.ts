import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wine-cheese',
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
          d="M3.5 11.5h6m-6 5H8m0 5H3.5V9A1.5 1.5 0 015 7.5h.5v-5h2v5H8A1.5 1.5 0 019.5 9v3m5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 1.5a1 1 0 11-2 0 1 1 0 012 0zm2-1c0-.738.405-1.376 1-1.723V13.5h-3v.5a1.5 1.5 0 11-3 0v-.5h-6v8h12v-2.277c-.595-.347-1-.985-1-1.723z"
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
          d="M5.25 17.25h9m-9 7.5H12m0 7.5H5.25V13.5a2.25 2.25 0 012.25-2.25h.75v-7.5h3v7.5H12a2.25 2.25 0 012.25 2.25V18m7.5 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm6 2.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3-1.5a2.99 2.99 0 011.5-2.584V20.25h-4.5V21a2.25 2.25 0 11-4.5 0v-.75h-9v12h18v-3.416a2.99 2.99 0 01-1.5-2.584z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWineCheeseComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconWineCheeseComponent],
  exports: [IconWineCheeseComponent],
})
export class IconWineCheeseModule {}
