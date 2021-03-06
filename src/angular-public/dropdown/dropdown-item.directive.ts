import { Highlightable } from '@angular/cdk/a11y';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  InjectionToken,
  Input,
  Output,
} from '@angular/core';
import { TypeRef } from '@sbb-esta/angular-core/common-behaviors';

let nextId = 0;

/** Event object emitted by AutocompleteOptionComponent when selected or deselected. */
export class SbbDropdownSelectionChange {
  constructor(
    /** Reference to the option that emitted the event. */
    public source: SbbDropdownItem
  ) {}
}

/**
 * Describes a parent component that manages a list of options.
 * Contains properties that the options can inherit.
 * @docs-private
 */
export interface SbbDropdownParent {
  multiple?: boolean;
}

/** Injection token used to provide the parent component to options. */
export const SBB_DROPDOWN_ITEM_PARENT_COMPONENT = new InjectionToken<SbbDropdownParent>(
  'SBB_DROPDOWN_ITEM_PARENT_COMPONENT'
);

/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionIndex Index of the option to be scrolled into the view.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
export function getDropdownItemScrollPosition(
  optionIndex: number,
  optionHeight: number,
  currentScrollPosition: number,
  panelHeight: number
): number {
  const optionOffset = optionIndex * optionHeight;

  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}

@Directive({
  selector: '[sbbDropdownItem]',
  host: {
    '[attr.id]': 'id',
    '[class.sbb-selected]': 'this.selected',
    '[class.sbb-active]': 'this.active',
  },
})
export class SbbDropdownItem implements Highlightable {
  /** Identifier of a dropdown item. */
  @Input() id: string = `sbb-dropdown-item-${nextId++}`;

  /** Whether this dropdown item is disabled. */
  disabled?: boolean = false;

  /** Whether this dropdown item is selected. */
  selected: boolean = false;

  /** Whether this dropdown item is active. */
  active: boolean = false;

  /** Event generated to click on a specific dropdown item. */
  @Output()
  readonly selectionChange = new EventEmitter<SbbDropdownSelectionChange>();

  constructor(private _elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) {}

  setActiveStyles(): void {
    if (!this.active) {
      this.active = true;
      this._changeDetectorRef.markForCheck();
    }
  }

  setInactiveStyles(): void {
    if (this.active) {
      this.active = false;
      this._changeDetectorRef.markForCheck();
    }
  }

  getLabel?(): string {
    return this._elementRef.nativeElement.textContent;
  }

  @HostListener('keydown', ['$event'])
  _handleKeydown(event: TypeRef<KeyboardEvent>): void {
    if (event.keyCode === ENTER || event.keyCode === SPACE) {
      this.selectViaInteraction();

      // Prevent the page from scrolling down and form submits.
      event.preventDefault();
    }
  }

  @HostListener('click')
  _onClick(): void {
    this._emitSelectionChangeEvent();
  }

  selectViaInteraction(): void {
    this._elementRef.nativeElement.click();
  }

  private _emitSelectionChangeEvent(): void {
    this.selectionChange.emit(new SbbDropdownSelectionChange(this));
  }

  select(): void {
    if (!this.selected) {
      this.selected = true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }

  deselect(): void {
    if (this.selected) {
      this.selected = false;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }
}
