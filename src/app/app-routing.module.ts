import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./routes/article/article.component";
import { HomeComponent } from "./routes/home/home.component";
import { AboutComponent } from "./routes/user/about/about.component";
import { CollaboratorsComponent } from "./routes/user/collaborators/collaborators.component";
import { CollectionsComponent } from "./routes/user/collections/collections.component";
import { ExclusivesComponent } from "./routes/user/exclusives/exclusives.component";
import { ProfileComponent } from "./routes/user/profile/profile.component";
import { UserComponent } from "./routes/user/user.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "article/:id", component: ArticleComponent },
  {
    path: "user/:id",
    component: UserComponent,
    children: [
      { path: "", component: ProfileComponent },
      { path: "collections", component: CollectionsComponent },
      { path: "exclusives", component: ExclusivesComponent },
      { path: "about", component: AboutComponent },
      { path: "collaborators", component: CollaboratorsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
