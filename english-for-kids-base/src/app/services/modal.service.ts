import { Injectable } from '@angular/core';
import { ModalComponent } from '../components';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: ModalComponent[] = [];

  add(modal: ModalComponent): void {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string): void {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string): void {
    // open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    if (modal) {
      modal.open();
    }
  }

  close(id: string): void {
    // close modal specified by id
    const modal = this.modals.find(x => x.id === id);
    if (modal) {
      modal.close();
    }
  }
}
