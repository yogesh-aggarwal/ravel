import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
})
export class IconButtonComponent implements OnInit {
  @Input("icon")
  icon: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.icon);
  }
}
