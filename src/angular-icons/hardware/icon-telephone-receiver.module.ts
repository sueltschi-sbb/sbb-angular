import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-telephone-receiver',
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
          d="M7.31 14.99c2.572 4.455 6.334 7.167 8.685 6.372a.736.736 0 00.242-.085l1.702-.982c.521-.3.664-1.035.32-1.633l-1.757-3.042c-.345-.598-1.053-.84-1.573-.54l-1.974 1.14c-.198.114-.463.057-.632-.142a19.45 19.45 0 01-1.988-2.837 19.44 19.44 0 01-1.463-3.14c-.088-.245-.004-.504.193-.617l1.974-1.14c.521-.3.665-1.036.32-1.633L9.602 3.67c-.345-.597-1.053-.84-1.573-.54l-1.703.983a.762.762 0 00-.194.167C4.268 5.92 4.736 10.531 7.31 14.99z"
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
          d="M10.964 22.484c3.86 6.684 9.502 10.752 13.029 9.56.126-.025.249-.06.363-.128l2.553-1.473c.781-.45.996-1.553.478-2.45l-2.634-4.563c-.517-.897-1.58-1.26-2.36-.81l-2.96 1.709c-.297.172-.695.087-.948-.212a29.175 29.175 0 01-2.982-4.255 29.161 29.161 0 01-2.195-4.71c-.132-.368-.006-.756.29-.926l2.96-1.711c.782-.45.998-1.553.48-2.448l-2.635-4.563c-.517-.896-1.58-1.262-2.36-.81L9.49 6.168a1.143 1.143 0 00-.29.25c-2.797 2.46-2.095 9.379 1.765 16.066z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTelephoneReceiverComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconTelephoneReceiverComponent],
  exports: [IconTelephoneReceiverComponent],
})
export class IconTelephoneReceiverModule {}
