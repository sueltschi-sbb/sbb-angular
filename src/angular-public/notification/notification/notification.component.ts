import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SbbIconDirective } from '@sbb-esta/angular-core/icon-directive';

/** @deprecated use strings directly */
export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

export interface SbbJumpMark {
  /** Title of an element in jump marks. */
  title: string;
  /** Identifier of an element in jump marks. */
  elementId?: string;
  callback?: (event$: any, jumpMark: SbbJumpMark) => void;
}

@Component({
  selector: 'sbb-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sbb-notification',
    '[class.sbb-notification-success]': `this.type === 'success'`,
    '[class.sbb-notification-info]': `this.type === 'info'`,
    '[class.sbb-notification-error]': `this.type === 'error'`,
    '[class.sbb-notification-has-jump-marks]': 'this.jumpMarks && this.jumpMarks.length',
  },
})
export class SbbNotification {
  /** Type of notification. */
  @Input()
  type: 'success' | 'info' | 'error' = 'success';

  /** @docs-private */
  @ViewChild('error', { read: TemplateRef, static: true })
  errorIcon: TemplateRef<any>;

  /** @docs-private */
  @ViewChild('check', { read: TemplateRef, static: true })
  checkIcon: TemplateRef<any>;

  /** @docs-private */
  @ViewChild('info', { read: TemplateRef, static: true })
  infoIcon: TemplateRef<any>;

  /**
   * The icon to be used into the notification left side.
   * By default uses three icons for SUCCESS, ERROR or INFO notification type,
   * but the user can use his own icon using the NotificationIconDirective.
   */
  @Input()
  set icon(notificationIcon: TemplateRef<any> | null) {
    this._icon = notificationIcon;
  }
  get icon() {
    if (this._contentIcon) {
      return this._contentIcon;
    } else if (this._icon) {
      return this._icon;
    }
    switch (this.type) {
      case 'success':
        return this.checkIcon;
      case 'error':
        return this.errorIcon;
      case 'info':
        return this.infoIcon;
      default:
        return null;
    }
  }
  private _icon: TemplateRef<any> | null;

  /**
   * icon placed in template
   * @docs-private
   */
  @ContentChild(SbbIconDirective, { read: TemplateRef })
  _contentIcon: TemplateRef<any>;

  /** Message displayed into the notification content */
  @Input() message: string;

  /** List of in page links displayed on the bottom of the notification */
  @Input() jumpMarks?: SbbJumpMark[];

  /**
   * Used to scroll to an element identified by a jump mark
   *
   * @param $event click event
   * @param jumpMark jump mark after the notification message
   */
  scrollTo($event: any, jumpMark: SbbJumpMark) {
    $event.preventDefault();
    if (jumpMark.elementId) {
      document.querySelector(jumpMark.elementId)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (jumpMark.callback) {
      jumpMark.callback($event, jumpMark);
    }
  }
}
