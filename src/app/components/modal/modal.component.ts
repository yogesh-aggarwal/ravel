import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal/modal.service";

@Component({
  selector: "modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  isOpen: boolean = false;
  title: string = "";
  content: string = "";

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.isOpen.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
    this.modalService.title.subscribe((title) => {
      this.title = title;
    });
    this.modalService.content.subscribe((content) => {
      this.content = content;
    });
  }

  close() {
    this.modalService.isOpen.next(false);
  }
}
