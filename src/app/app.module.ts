import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { LastArticleComponent } from './components/last-article/last-article.component';
import { OtherArticleComponent } from './components/other-article/other-article.component';
import { ImgArticleComponent } from './components/img-article/img-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ArticlesPageComponent,
    BackButtonComponent,
    LastArticleComponent,
    OtherArticleComponent,
    ImgArticleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
