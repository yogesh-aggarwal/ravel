import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavbarService } from "src/app/services/navbar/navbar.service";
import { UserInterface } from "src/app/services/user/interface";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit, OnDestroy {
  id: string;
  user: UserInterface;

  constructor(
    private route: ActivatedRoute,
    private navbarService: NavbarService,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.navbarService.isOpen.next(false);
    this.id = this.route.snapshot.params["id"];

    this.userService.getUser(this.id);
    this.userService.users.subscribe((users) => {
      if (!users[this.id]) return;
      this.user = users[this.id];
    });
  }

  ngOnDestroy(): void {
    this.navbarService.isOpen.next(true);
  }

  back() {
    this.location.back();
  }
}
