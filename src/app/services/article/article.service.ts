import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserInterface } from "../user/interface";
import { UserService } from "../user/user.service";
import { ArticleInterface } from "./interfaces";
import { take } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  articles: BehaviorSubject<{
    [key: string]: ArticleInterface;
  }> = new BehaviorSubject({
    "8zVNb35IyV6ejDHFWWHt": {
      id: "8zVNb35IyV6ejDHFWWHt",
      upvoters: ["WRPezSWZSJM52RPr8qluBMCBBdC3"],
      downvoters: [],
      thumbnail: "https://bit.ly/3pf9M1Z",
      datePublished: new Date(),
      content: "<p>Hello IndexedDB</p>",
      dateEdited: [new Date()],
      shortDesc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      tags: ["web", "indexeddb"],
      title: "How to Use IndexedDB in an efficient way",
      author: {
        id: "WRPezSWZSJM52RPr8qluBMCBBdC3",
        name: "Yogesh Aggarwal",
        profileImg: "https://bit.ly/3eHkUQm",
      },
      authorId: "WRPezSWZSJM52RPr8qluBMCBBdC3",
    },
    XgpLPw8DzRO4zFYFmgjt: {
      id: "XgpLPw8DzRO4zFYFmgjt",
      shortDesc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      datePublished: new Date(),
      title: "How to Use IndexedDB in an efficient way",
      upvoters: ["WRPezSWZSJM52RPr8qluBMCBBdC3"],
      downvoters: [],
      thumbnail: "https://bit.ly/3pf9M1Z",
      tags: ["web", "indexeddb"],
      author: {
        id: "WRPezSWZSJM52RPr8qluBMCBBdC3",
        name: "Yogesh Aggarwal",
        profileImg: "https://bit.ly/3eHkUQm",
      },
      authorId: "WRPezSWZSJM52RPr8qluBMCBBdC3",
      content: "<p>Hello IndexedDB</p>",
      dateEdited: [new Date()],
    },
    XgpLPw8DzRO4zFYFmgjt2: {
      id: "XgpLPw8DzRO4zFYFmgjt2",
      shortDesc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      datePublished: new Date(),
      title: "How to Use IndexedDB in an efficient way",
      upvoters: ["WRPezSWZSJM52RPr8qluBMCBBdC3"],
      downvoters: [],
      thumbnail: "https://bit.ly/3pf9M1Z",
      tags: ["web", "indexeddb"],
      author: {
        id: "WRPezSWZSJM52RPr8qluBMCBBdC3",
        name: "Yogesh Aggarwal",
        profileImg: "https://bit.ly/3eHkUQm",
      },
      authorId: "WRPezSWZSJM52RPr8qluBMCBBdC3",
      content: "<p>Hello IndexedDB</p>",
      dateEdited: [new Date()],
    },
    XgpLPw8DzRO4zFYFmgjt3: {
      id: "XgpLPw8DzRO4zFYFmgjt3",
      shortDesc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      datePublished: new Date(),
      title: "How to Use IndexedDB in an efficient way",
      upvoters: ["WRPezSWZSJM52RPr8qluBMCBBdC3"],
      downvoters: [],
      thumbnail: "https://bit.ly/3pf9M1Z",
      tags: ["web", "indexeddb"],
      author: {
        id: "WRPezSWZSJM52RPr8qluBMCBBdC3",
        name: "Yogesh Aggarwal",
        profileImg: "https://bit.ly/3eHkUQm",
      },
      authorId: "WRPezSWZSJM52RPr8qluBMCBBdC3",
      content: "<h4>Hello IndexedDB</h4>",
      dateEdited: [new Date()],
    },
  });
  userSuggestions: BehaviorSubject<string[]> = new BehaviorSubject([
    "8zVNb35IyV6ejDHFWWHt",
    "XgpLPw8DzRO4zFYFmgjt",
    "XgpLPw8DzRO4zFYFmgjt2",
    "XgpLPw8DzRO4zFYFmgjt3",
  ]);
  trending: BehaviorSubject<string[]> = new BehaviorSubject(null);

  constructor(private firestore: AngularFirestore) {}

  private async parseArticle(article: any) {
    let articles: { [key: string]: ArticleInterface } = this.articles.value;
    if (Object.keys(articles).includes(article.id)) return;

    let author = await this.firestore
      .collection("authors")
      .doc(article.author)
      .get()
      .pipe(take(1))
      .toPromise();

    articles[article.id] = {
      id: article.id,
      ...article.data(),
      author: author,
    };
    console.log(articles);
    this.articles.next(articles);
  }

  async getArticleById(id: string) {
    if (this.articles[id] === null) {
      let article = await this.firestore
        .collection("articles")
        .doc(id)
        .get()
        .pipe(take(1))
        .toPromise();
      this.parseArticle(article);
    } else {
      console.log("Article Already Exists in Cache!!");
    }
  }

  async getArticlesByIds(articleIds: string[]) {
    articleIds.forEach(async (articleId: string) => {
      if (this.articles.value[articleId]) return;
      const article = await this.firestore
        .collection("articles")
        .doc(articleId)
        .get()
        .pipe(take(1))
        .toPromise();
      this.parseArticle(article);
    });
  }

  async getUserSuggestions() {
    const user: UserInterface = UserService.user.value;
    if (user) {
      const articleIds: string[] = (
        await this.firestore
          .collection("suggestions")
          .doc(user.id)
          .get()
          .pipe(take(1))
          .toPromise()
      ).data()?.articles;

      if (!articleIds) return;
      this.userSuggestions.next(articleIds);
      this.getArticlesByIds(articleIds);
    }
  }

  async getTrending() {
    const user: UserInterface = UserService.user.value;
    if (user) {
      const articleIds: string[] = (
        await this.firestore
          .collection("trending")
          .doc("in")
          .get()
          .pipe(take(1))
          .toPromise()
      ).data()?.articles;

      if (!articleIds) return;
      this.trending.next(articleIds);
      this.getArticlesByIds(articleIds);
    }
  }
}
