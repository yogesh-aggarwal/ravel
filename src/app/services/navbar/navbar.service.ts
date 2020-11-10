import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NavbarService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}
}
