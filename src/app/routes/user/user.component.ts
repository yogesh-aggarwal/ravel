import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  currentSection: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navbarService: NavbarService,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.userService.getUser(this.id);
    this.userService.users.subscribe((users) => {
      if (!users[this.id]) return;
      this.user = users[this.id];
    });

    let url: string = this.router.url;

    if (url.endsWith("collections")) {
      this.currentSection = "collections";
    } else if (url.endsWith("exclusives")) {
      this.currentSection = "exclusives";
    } else if (url.endsWith("about")) {
      this.currentSection = "about";
    } else {
      this.currentSection = "";
    }
  }

  ngOnDestroy(): void {
    this.navbarService.isOpen.next(true);
  }

  back() {
    this.location.back();
  }

  navigate(route: string) {
    this.currentSection = route;
    !route
      ? this.router.navigate(["user", this.user.id])
      : this.router.navigate(["user", this.user.id, route]);
  }
}
