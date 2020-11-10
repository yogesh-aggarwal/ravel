import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data/data.service";
import { NavbarService } from "./services/navbar/navbar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isNavbarOpen: boolean = true;

  constructor(
    private dataService: DataService,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.dataService.prepareData();
    this.navbarService.isOpen.subscribe((isOpen: boolean) => {
      this.isNavbarOpen = isOpen;
    });
  }
}
