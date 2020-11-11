import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  showNotification: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}
}
