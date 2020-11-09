import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./routes/article/article.component";
import { HomeComponent } from "./routes/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "article/:id", component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
