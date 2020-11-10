import { Component, OnInit } from "@angular/core";
import { UserInterface } from "src/app/services/user/interface";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user: UserInterface;

  constructor() {}

  ngOnInit(): void {
    UserService.user.subscribe((user) => {
      this.user = user;
    });
  }
}
