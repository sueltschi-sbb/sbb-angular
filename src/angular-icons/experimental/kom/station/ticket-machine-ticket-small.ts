/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketMachineTicketSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.5 17.5h11v-15h-11v15zm1 4h9v-4h-9v4zm.5-17h8M12.5 7v3m-7 1.5h5v-4h-5v4zm11 6h5v-8h-5v8zm1.5-2h2m-2-2h2m-14.5 1h5v-1h-5v1z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTicketMachineTicketSmall {}

@Component({
  selector: 'sbb-icon-ticket-machine-ticket-small',
  template: ` <svg sbbIconTicketMachineTicketSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketMachineTicketSmall {}

@NgModule({
  declarations: [SvgIconTicketMachineTicketSmall, IconTicketMachineTicketSmall],
  exports: [SvgIconTicketMachineTicketSmall, IconTicketMachineTicketSmall],
})
export class IconTicketMachineTicketSmallModule {}
