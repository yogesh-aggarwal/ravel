import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}

  showModal() {
    this.isOpen.next(true);
  }

  closeModal() {
    this.isOpen.next(true);
  }
}
