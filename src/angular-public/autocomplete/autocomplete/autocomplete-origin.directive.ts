import { Directive, ElementRef } from '@angular/core';

/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
@Directive({
  selector: '[sbbAutocompleteOrigin]',
  exportAs: 'sbbAutocompleteOrigin',
})
export class AutocompleteOriginDirective {
  constructor(
    /** Reference to the element on which the directive is applied. */
    public elementRef: ElementRef<HTMLElement>
  ) {}
}
