import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  ViewChild,
  ChangeDetectorRef,
  OnDestroy,
  OnInit,
  HostBinding,
  HostListener,
  ContentChild,
  TemplateRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { OptionSelectionImageDirective } from '../option-selection-image.directive';
import { CheckboxComponent } from '../../checkbox/checkbox';

let counter = 0;

@Component({
  selector: 'sbb-option-selection-multiple',
  templateUrl: './option-selection-multiple.component.html',
  styleUrls: ['./option-selection-multiple.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OptionSelectionMultipleComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionSelectionMultipleComponent implements ControlValueAccessor {

  @HostBinding('class.sbb-option-selection')
  cssClass = true;

  /**
  * Value contained in a checkbox field
  */
  @Input() value: any;

  /**
  * Name contained in a checkbox field
  */
  @Input() name: string;

  /**
     * Template that will contain icons.
     * Use the *sbbOptionSelectionImage structural directive to provide the desired icon/image.
     */
  @Input()
  @ContentChild(OptionSelectionImageDirective, { read: TemplateRef })
  image: TemplateRef<any>;

  @Input()
  label: string;

  @Input()
  subtitle?: string;

  @ViewChild('checkbox') embeddedCheckbox: CheckboxComponent;
  /**
     * Radio button identifier
     */
  @Input()
  @HostBinding('id')
  inputId = `sbb-option-selection-multiple-${counter++}`;
  /**
   * Indicates radio button name in formControl
   */
  @Input() formControlName: string;
  /**
   * Used to set the 'aria-label' attribute on the underlying input element.
   */
  // tslint:disable-next-line:no-input-rename
  @Input('aria-label') ariaLabel: string;
  /**
   * The 'aria-labelledby' attribute takes precedence as the element's text alternative.
   */
  // tslint:disable-next-line:no-input-rename
  @Input('aria-labelledby') ariaLabelledby: string;
  /**
   * The 'aria-describedby' attribute is read after the element's label and field type.
   */
  // tslint:disable-next-line:no-input-rename
  @Input('aria-describedby') ariaDescribedby: string;
  /**
   * Indicates that the radio button field is required
   */
  @Input()
  @HostBinding('class.sbb-option-selection-required')
  set required(value: any) {
    this.embeddedCheckbox.required = coerceBooleanProperty(value);
  }
  get required(): any {
    return this.embeddedCheckbox.required;
  }


  /**
   * The disabled state of the radio button
   */
  @Input()
  @HostBinding('class.sbb-option-selection-disabled')
  set disabled(value: any) {
    this.embeddedCheckbox.disabled = coerceBooleanProperty(value);
    this.embeddedCheckbox.changeDetector.markForCheck();
  }
  get disabled(): any {
    return this.embeddedCheckbox.disabled;
  }

  /**
   * The checked state of the radio button
   */
  @Input()
  @HostBinding('class.sbb-option-selection-checked')
  get checked(): boolean {
    return this.embeddedCheckbox.checked;
  }
  set checked(value: boolean) {
    this.embeddedCheckbox.checked = value;
  }


  @HostBinding('class.sbb-option-selection-has-subtitle')
  get hasSubtitle() {
    return !!this.subtitle;
  }

  /**
   * Class property that represents a change on the radio button
   */
  onChange = (_: any) => {
    this.embeddedCheckbox.onChange(_);
  }
  /**
   * Class property that represents a touch on the radio button
   */
  onTouched = () => {
    this.embeddedCheckbox.onTouched();
  }

  constructor(private changeDetector: ChangeDetectorRef) {

  }

  writeValue(value: any): void {
    this.embeddedCheckbox.checked = this.value = value;
  }

  /**
   * Registers the on change callback
   */
  registerOnChange(fn: any): void {
    this.embeddedCheckbox.onChange = fn;
  }
  /**
   * Registers the on touched callback
   */
  registerOnTouched(fn: any): void {
    this.embeddedCheckbox.onTouched = fn;
  }

  /**
   * Manage the event click on the radio button
   */
  @HostListener('click')
  click() {
    if (!this.disabled) {

      this.checked = !this.checked;
      this.embeddedCheckbox.checked = this.checked;
      this.onChange(this.checked);
      this.onTouched();
      this.writeValue(this.checked);
    }

  }

  /**
   * Sets the radio button status to disabled
   */
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    this.embeddedCheckbox.disabled = disabled;
    this.changeDetector.markForCheck();
  }

}
