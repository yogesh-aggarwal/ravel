import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./routes/home/home.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment.prod";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UserComponent } from "./routes/user/user.component";
import { TrendingComponent } from "./routes/home/trending/trending.component";
import { PostsComponent } from "./routes/home/posts/posts.component";
import { ArticleCardComponent } from "./components/article-card/article-card.component";
import { ArticleComponent } from "./routes/article/article.component";
import { CodeComponent } from "./components/blog/code/code.component";
import { ContentComponent } from "./components/blog/content/content.component";
import { ProfileComponent } from './routes/user/profile/profile.component';
import { CollectionsComponent } from './routes/user/collections/collections.component';
import { ExclusivesComponent } from './routes/user/exclusives/exclusives.component';
import { AboutComponent } from './routes/user/about/about.component';
import { CollaboratorsComponent } from './routes/user/collaborators/collaborators.component';
import { LoadingComponent } from './components/loading/loading.component';
import { WriteComponent } from './routes/write/write.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodeComponent,
    ContentComponent,
    NavbarComponent,
    ArticleComponent,
    UserComponent,
    TrendingComponent,
    PostsComponent,
    ArticleCardComponent,
    ProfileComponent,
    CollectionsComponent,
    ExclusivesComponent,
    AboutComponent,
    CollaboratorsComponent,
    LoadingComponent,
    WriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
