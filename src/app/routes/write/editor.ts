import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "editorjs-header-with-anchor";
import Paragraph from "editorjs-paragraph-with-alignment";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";
import AttachesTool from "@editorjs/attaches";
import Embed from "@editorjs/embed";
import SocialPost from "editorjs-social-post-plugin";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Underline from "@editorjs/underline";
import TextSpolier from "editorjs-inline-spoiler-tool";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import Gist from "editorjs-github-gist-plugin";

export function getEditor() {
  const editor = new EditorJS({
    holder: "editorjs",
    defaultBlock: "paragraph",
    autofocus: true,
    tools: {
      header: {
        class: Header,
        shortcut: "CMD+SHIFT+H",
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      list: List,
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author",
        },
      },
      warning: {
        class: Warning,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+W",
        config: {
          titlePlaceholder: "Title",
          messagePlaceholder: "Message",
        },
      },
      delimiter: Delimiter,
      alert: Alert,
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
            byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
          },
        },
      },
      linkTool: {
        class: LinkTool,
        config: {
          endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching
        },
      },
      attaches: {
        class: AttachesTool,
        config: {
          endpoint: "http://localhost:8008/uploadFile",
        },
      },
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            coub: true,
            github: true,
          },
        },
      },
      socialPost: SocialPost,
      table: {
        class: Table,
        inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3,
        },
      },
      code: CodeTool,
      Marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M",
      },
      inlineCode: {
        class: InlineCode,
        shortcut: "CMD+SHIFT+M",
      },
      underline: Underline,
      TextSpolier: TextSpolier,
      gist: Gist,
    },
    onReady: () => {
      new DragDrop(editor);
      new Undo({ editor: editor });
    },
  });

  return editor;
}
