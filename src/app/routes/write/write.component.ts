import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ArticleInterface } from "src/app/services/article/interfaces";
import { UserService } from "src/app/services/user/user.service";
import { NotificationService } from "src/app/services/notification/notification.service";
import { ModalService } from "src/app/services/modal/modal.service";
import { getEditor } from "./editor";
import { Md5 } from "ts-md5/dist/md5";
import { OutputData } from "@editorjs/editorjs";

@Component({
  selector: "app-write",
  templateUrl: "./write.component.html",
  styleUrls: ["./write.component.scss"],
})
export class WriteComponent implements OnInit {
  title: string = "";
  shortDesc: string = "";
  @ViewChild("modalContent")
  modalContent: ElementRef;

  currentDate = new Date();
  editor = getEditor();

  constructor(
    // private notificationService: NotificationService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  async publish() {
    let data: OutputData = await this.editor.save();
    const md5: Md5 = new Md5();
    const id: string = md5
      .appendStr(Date.now().toString() + UserService.user.value.id)
      .end()
      .toString();

    const article: ArticleInterface = {
      id: id,
      authorId: UserService.user.value.id,
      title: this.title,
      shortDesc: this.shortDesc,
      content: data,
      tags: [],
      thumbnail: "",
      upvoters: [],
      downvoters: [],
      datePublished: new Date(),
      dateEdited: [new Date()],
    };

    this.modalService.setTitle("Add Tags To Your Article");
    this.modalService.setContent(this.modalContent.nativeElement.innerHTML);
    this.modalService.showModal();

    console.log(article);
  }
}
