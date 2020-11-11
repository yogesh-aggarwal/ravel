import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/services/notification/notification.service";

@Component({
  selector: "notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent implements OnInit {
  isOpen: boolean = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.isOpen.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }
}
