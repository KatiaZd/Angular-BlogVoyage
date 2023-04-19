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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ArticlesPageComponent,
    BackButtonComponent

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
