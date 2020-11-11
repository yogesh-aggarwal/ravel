import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal/modal.service";

@Component({
  selector: "modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  isOpen: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.isOpen.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }
}
