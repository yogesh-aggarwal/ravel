import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: "home-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"],
})
export class TrendingComponent implements OnInit {
  articleIds: string[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.trending.subscribe((articleIds: string[]) => {
      if (!articleIds) return;
      this.articleIds = articleIds;
    });
  }
}
