import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "src/app/services/article/article.service";
import { ArticleInterface } from "src/app/services/article/interfaces";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  id: string;
  article: ArticleInterface;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.article = this.articleService.articles.value[this.id];
  }
}
