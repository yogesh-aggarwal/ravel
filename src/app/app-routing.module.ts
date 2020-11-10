import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./routes/article/article.component";
import { HomeComponent } from "./routes/home/home.component";
import { UserComponent } from "./routes/user/user.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "user/:id", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
