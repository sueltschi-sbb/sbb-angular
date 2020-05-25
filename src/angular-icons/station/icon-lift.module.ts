import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-lift',
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
          d="M2.75 20.25h11.5V3.75H2.75v16.5zM16.879 6l2.12-2.122L21.122 6m0 12l-2.12 2.122L16.878 18M9.5 6.5a1 1 0 11-2-.002 1 1 0 012 .001zm1 7.999v-5h-4v5h1v4h2v-4h1z"
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
          d="M4.125 30.375h17.25V5.625H4.125v24.75zM25.318 9L28.5 5.817 31.68 9m0 18.001l-3.18 3.182L25.318 27m-11.07-17.25a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zm1.5 11.999v-7.5h-6v7.5h1.5v6h3v-6h1.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLiftComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLiftComponent],
  exports: [IconLiftComponent],
})
export class IconLiftModule {}
