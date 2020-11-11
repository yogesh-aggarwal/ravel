import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  showNotification() {
    this.isOpen.next(true);
  }

  closeNotification() {
    this.isOpen.next(true);
  }
}
