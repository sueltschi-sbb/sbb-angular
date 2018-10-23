import { Component, Input, EventEmitter, Output, ViewChild, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOWN_ARROW, ENTER, ESCAPE, TAB, UP_ARROW } from '@angular/cdk/keycodes';

import {
  AutocompleteOptionListComponent,
  SbbAutocompleteSelectedEvent
} from '../autocomplete-option-list/autocomplete-option-list.component';
import { AutocompleteOptionComponent, Option } from '..';

@Component({
  selector: 'sbb-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements ControlValueAccessor {

  filter: string;
  value: any;
  disabled: boolean;

  @ViewChild('optionsList')
  optionsList: AutocompleteOptionListComponent;

  @Input()
  minDigitsTrigger = 3;

  @Input()
  staticOptions?: Array<any>;

  @Input()
  options?: Array<any> = [];

  @Output()
  inputedText: EventEmitter<string> = new EventEmitter<string>();

  isFocused = false;
  get showOptions() { return this.isFocused && !!this.options.length; }

  get activeOption(): AutocompleteOptionComponent | null {
    if (this.optionsList && this.optionsList.keyManager) {
      return this.optionsList.keyManager.activeItem;
    }

    return null;
  }

  propagateChange: any = () => { };

  writeValue(newValue: Option): void {
    console.log('writeValue', newValue);
    if (newValue) {
      this.value = newValue;
      this.filter = newValue.getLabel();
      this.propagateChange(newValue);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void { }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setVisibility() {
    this.isFocused = (this.filter.length >= this.minDigitsTrigger) || (this.staticOptions && !!this.staticOptions.length);
  }

  onInput($event) {
    this.filter = $event.target.value;
    console.log('input', $event.target.value);
    this.setVisibility();
    this.inputedText.emit(this.filter);
  }

  /**
   * Resets the active item to -1 so arrow events will activate the
   * correct options, or to 0 if the consumer opted into it.
   */
  private resetActiveItem(): void {
    this.optionsList.keyManager.setActiveItem(this.optionsList.autoActiveFirstOption ? 0 : -1);
  }

  onOptionSelected(selectedOption: SbbAutocompleteSelectedEvent) {
    this.writeValue(selectedOption.option.item);
    this.isFocused = false;
  }

  tabSelection($event) {
    const keyCode = $event.keyCode;
    console.log('tabSelection', keyCode);
    if (!!this.optionsList.keyManager.activeItem) {

      this.writeValue(this.optionsList.keyManager.activeItem.item);
    }
    this.isFocused = false;


  }

  scrollOptions($event) {
    const keyCode = $event.keyCode;
    console.log('scrollOptions keycode', keyCode);

    if (keyCode === 8) {
      return;
    }
    // Prevent the default action on all escape key presses. This is here primarily to bring IE
    // in line with other browsers. By default, pressing escape on IE will cause it to revert
    // the input value to the one that it had on focus, however it won't dispatch any events
    // which means that the model value will be out of sync with the view.
    if (keyCode === ESCAPE) {
      event.preventDefault();
    }

    if (this.activeOption && keyCode === ENTER && this.showOptions) {
      this.activeOption._selectViaInteraction();
      this.resetActiveItem();
      event.preventDefault();
    } else if (this.optionsList) {
      this.isFocused = true;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;

      if (this.showOptions) {
        this.optionsList.keyManager.onKeydown($event);
        if (!this.optionsList.keyManager.activeItem) {
          this.optionsList.keyManager.setPreviousItemActive();
        }
      } else if (isArrowKey) {
        this.setVisibility();
      }
    }
  }
}
