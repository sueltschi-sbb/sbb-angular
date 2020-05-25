import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-walk-fast',
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
          d="M13.501 13.593V16.5l-3 3m6-11l-1.001 5 2.001 2L16.5 20m-2.999-3.5v-3l1-5m-4 5.5l1-3.5 3-2h2l2 2 2.5 1m-6.5-3l-1 5H15.5l1.001-5M9 9.5H5m3 4H3m7 3H5m7-10H7m8.491 0c-.533 0-1-.467-1-1 0-.533.467-1 1-1 .533 0 1 .467 1 1 0 .533-.467 1-1 1z"
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
          d="M20.252 20.39v4.36l-4.5 4.5m9-16.5l-1.502 7.5 3.002 3L24.75 30m-4.498-5.25v-4.5l1.5-7.5M15.75 21l1.5-5.25 4.5-3h3l3 3 3.75 1.5m-9.75-4.5l-1.5 7.5h2.999l1.502-7.5M13.5 14.25h-6m4.5 6H4.5m10.5 4.5H7.5m10.5-15h-7.5m12.737 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWalkFastComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWalkFastComponent],
  exports: [IconWalkFastComponent],
})
export class IconWalkFastModule {}
