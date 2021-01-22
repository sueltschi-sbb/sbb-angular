import { ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Constructor } from './constructor';

export const ɵtriggerVariantCheck = new Subject<void>();

/** @docs-private */
export interface HasVariant {
  readonly variant: Observable<SbbVariant>;
}

/** @docs-private */
export type HasVariantCtor = Constructor<HasVariant>;

/** @docs-private */
export interface HasElementRef {
  _elementRef: ElementRef;
}

/** Possible variant values. */
export type SbbVariant = 'standard' | 'lean' | undefined;

function detectVariant(element: Element): SbbVariant {
  if (element.classList.contains('sbb-lean')) {
    return 'lean';
  }

  if (typeof getComputedStyle !== 'function') {
    return 'standard';
  }

  const styles = getComputedStyle(element);
  const variant =
    styles.getPropertyValue('--sbbMode') || ((styles as any)['-ie-sbbMode'] as string);
  return variant === 'lean' ? 'lean' : 'standard';
}

/** Mixin to augment a directive with a variant property. */
export function mixinVariant<T extends Constructor<HasElementRef>>(base: T): HasVariantCtor & T {
  return class extends base {
    readonly variant: Observable<SbbVariant> = ɵtriggerVariantCheck.pipe(
      startWith(null),
      map(() => detectVariant(this._elementRef.nativeElement))
    );

    constructor(...args: any[]) {
      super(...args);
    }
  };
}
