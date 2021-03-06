import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SbbGhettoboxConfig, SbbGhettoboxRef } from '../ghettobox/ghettobox-ref';

import { SbbGhettoboxContainer } from './ghettobox-container.component';

/**
 * Internal service that operate on ghettobox container.
 * @docs-private
 */
@Injectable({
  providedIn: 'root',
})
export class SbbGhettoboxContainerService {
  /** Observable you can subscribe to know if sbb-ghettobox-container has been loaded */
  readonly containerReady = new Subject<void>();

  private _containerInstance: SbbGhettoboxContainer | null;
  private _attachedGhettoboxes: SbbGhettoboxRef[] = [];

  /** Check whether a container is present */
  get hasContainerLoaded(): boolean {
    return !!this._containerInstance;
  }

  /** Get the List of attached ghettoboxes within a container */
  get attachedGhettoboxes(): SbbGhettoboxRef[] {
    return this._attachedGhettoboxes;
  }

  /** Used by the container to pass a reference of its self to the GhettoboxService */
  loadContainer(ghettoboxContainer: SbbGhettoboxContainer) {
    this._containerInstance = ghettoboxContainer;
  }

  /** Used by the container to pass a reference of its self to the GhettoboxService */
  loadInitialGhettoboxes(initialGhettoboxes: SbbGhettoboxRef[]) {
    this._attachedGhettoboxes.push(...initialGhettoboxes);
    this.containerReady.next();
  }

  /** Used by the container to clear its reference in GhettoboxService on container destroy */
  clearContainer() {
    this._containerInstance = null;
  }

  /** Creates a new ComponentPortal of GhettoboxComponent and attach it to the cdkPortalOutlet */
  createGhettobox(ghettobox: SbbGhettoboxConfig): SbbGhettoboxRef {
    this.checkIfContainerIsPresent();
    return this._containerInstance!.createGhettobox(ghettobox);
  }

  /** Deletes a Ghettobox by ID */
  deleteById(ghettoboxId: string) {
    const ghettobox = this._getGhettoboxById(ghettoboxId);
    if (ghettobox) {
      this._delete(ghettobox);
    }
  }

  /** Deletes a Ghettobox by INDEX */
  deleteByIndex(index: number) {
    this._delete(this._attachedGhettoboxes[index]);
  }

  /** Clear all ghettoboxes */
  clearAll() {
    const attachedGettoboxCopy = this._attachedGhettoboxes.slice();
    attachedGettoboxCopy.forEach((g) => g.delete());
  }

  /** @docs-private */
  pushGettoboxRefIntoAttachedCollection(ghettoboxRef: SbbGhettoboxRef) {
    this._attachedGhettoboxes.push(ghettoboxRef);
  }

  /** @docs-private */
  deleteFromAttachedGhettoboxesCollection(ghettoboxId: string): void {
    const index = this._attachedGhettoboxes.findIndex((g) => g.id === ghettoboxId);
    if (index !== -1) {
      this._attachedGhettoboxes.splice(index, 1);
    }
  }

  /** @docs-private */
  checkIfContainerIsPresent() {
    if (!this._containerInstance) {
      throw Error(
        'You must have a sbb-ghettobox-container in the page in order to add one or more Ghettoboxes dynamically'
      );
    }
  }

  /** @docs-private */
  private _getGhettoboxById(ghettoboxId: string): SbbGhettoboxRef | undefined {
    return this._attachedGhettoboxes.find((g) => g.id === ghettoboxId);
  }

  /** @docs-private */
  private _delete(ghettoboxToDelete: SbbGhettoboxRef) {
    if (ghettoboxToDelete) {
      ghettoboxToDelete.delete();
    }
  }
}
