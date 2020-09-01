/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconTicketHeartMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M27.75 17.25c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5zm-7.7-3.617c-.466-1.395-1.69-2.382-3.14-2.382-1.104 0-2.067.579-2.673 1.467-.608-.888-1.572-1.467-2.676-1.467-1.856 0-3.347 1.615-3.347 3.634 0 .633.147 1.227.405 1.745.146.29.32.56.528.796l5.088 5.537 5.08-5.53c.12-.158.406-.559.5-.737.278-.533.437-1.15.437-1.81 0-.442-.07-.863-.201-1.253z"
      />
      <svg:path stroke-dasharray="1 1" d="M24.75 27V7.5" />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTicketHeartMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-ticket-heart-medium',
  template: ` <svg sbbIconTicketHeartMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketHeartMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconTicketHeartMedium, IconTicketHeartMedium],
  exports: [SvgIconTicketHeartMedium, IconTicketHeartMedium],
})
export class IconTicketHeartMediumModule {}
