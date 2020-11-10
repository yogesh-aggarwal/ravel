import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavbarService } from "src/app/services/navbar/navbar.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit, OnDestroy {
  id: string;

  constructor(
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.navbarService.isOpen.next(false);
    this.id = this.route.snapshot.params["id"];
  }

  ngOnDestroy(): void {
    this.navbarService.isOpen.next(true);
  }
}
