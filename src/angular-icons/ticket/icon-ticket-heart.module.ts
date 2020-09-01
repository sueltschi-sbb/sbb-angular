import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-ticket-heart',
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
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M18.5 11.5c0-1.7 1.3-3 3-3v-4h-19v14h19v-4c-1.7 0-3-1.3-3-3zm-5.133-2.411c-.31-.93-1.127-1.588-2.094-1.588-.736 0-1.378.386-1.782.978-.405-.592-1.048-.978-1.784-.978-1.237 0-2.23 1.077-2.23 2.423a2.602 2.602 0 00.621 1.694l3.392 3.69 3.387-3.685c.08-.106.27-.373.333-.492.185-.355.291-.767.291-1.207 0-.294-.047-.575-.134-.835z"
          />
          <path stroke-dasharray="1 1" d="M16.5 18V5" />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M27.75 17.25c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5zm-7.7-3.617c-.466-1.395-1.69-2.382-3.14-2.382-1.104 0-2.067.579-2.673 1.467-.608-.888-1.572-1.467-2.676-1.467-1.856 0-3.347 1.615-3.347 3.634 0 .633.147 1.227.405 1.745.146.29.32.56.528.796l5.088 5.537 5.08-5.53c.12-.158.406-.559.5-.737.278-.533.437-1.15.437-1.81 0-.442-.07-.863-.201-1.253z"
          />
          <path stroke-dasharray="1 1" d="M24.75 27V7.5" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketHeartComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketHeartComponent],
  exports: [IconTicketHeartComponent],
})
export class IconTicketHeartModule {}
