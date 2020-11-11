import { Component, OnInit } from "@angular/core";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import * as Plugins from "./plugins";
import { Md5 } from "ts-md5/dist/md5";
import { ArticleInterface } from "src/app/services/article/interfaces";
import { UserService } from "src/app/services/user/user.service";
import { NotificationService } from "src/app/services/notification/notification.service";
import { ModalService } from "src/app/services/modal/modal.service";

@Component({
  selector: "app-write",
  templateUrl: "./write.component.html",
  styleUrls: ["./write.component.scss"],
})
export class WriteComponent implements OnInit {
  currentDate = new Date();
  title: string = "";
  shortDesc: string = "";
  editor = new EditorJS({
    holder: "editorjs",
    defaultBlock: "paragraph",
    autofocus: true,
    tools: {
      header: {
        class: Plugins.Header,
        shortcut: "CMD+SHIFT+H",
      },
      paragraph: {
        class: Plugins.Paragraph,
        inlineToolbar: true,
      },
      list: Plugins.List,
      checklist: {
        class: Plugins.Checklist,
        inlineToolbar: true,
      },
      quote: {
        class: Plugins.Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author",
        },
      },
      warning: {
        class: Plugins.Warning,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+W",
        config: {
          titlePlaceholder: "Title",
          messagePlaceholder: "Message",
        },
      },
      delimiter: Plugins.Delimiter,
      alert: Plugins.Alert,
      image: {
        class: Plugins.ImageTool,
        config: {
          endpoints: {
            byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
            byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
          },
        },
      },
      linkTool: {
        class: Plugins.LinkTool,
        config: {
          endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching
        },
      },
      attaches: {
        class: Plugins.AttachesTool,
        config: {
          endpoint: "http://localhost:8008/uploadFile",
        },
      },
      embed: {
        class: Plugins.Embed,
        config: {
          services: {
            youtube: true,
            coub: true,
            github: true,
          },
        },
      },
      socialPost: Plugins.SocialPost,
      table: {
        class: Plugins.Table,
        inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3,
        },
      },
      code: Plugins.CodeTool,
      Marker: {
        class: Plugins.Marker,
        shortcut: "CMD+SHIFT+M",
      },
      inlineCode: {
        class: Plugins.InlineCode,
        shortcut: "CMD+SHIFT+M",
      },
      underline: Plugins.Underline,
      TextSpolier: Plugins.TextSpolier,
      gist: Plugins.Gist,
    },
    onReady: () => {
      new Plugins.DragDrop(this.editor);
      new Plugins.Undo({ editor: this.editor });
    },
  });

  constructor(
    private notificationService: NotificationService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  async publish() {
    let data: OutputData = await this.editor.save();
    const md5: Md5 = new Md5();
    const id: string = md5.appendStr(Date.now().toString()).end().toString();

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
    this.modalService.showModal();
    console.log(article);
  }
}
