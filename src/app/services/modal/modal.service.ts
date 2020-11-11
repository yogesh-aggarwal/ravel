import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  title: BehaviorSubject<string> = new BehaviorSubject("");
  content: BehaviorSubject<string> = new BehaviorSubject("");

  constructor() {}

  showModal() {
    this.isOpen.next(true);
  }

  closeModal() {
    this.isOpen.next(true);
  }

  setContent(content: string) {
    this.content.next(content);
  }

  setTitle(title: string) {
    this.title.next(title);
  }
}
