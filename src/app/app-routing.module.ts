import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "articles/:id", component: ArticlesPageComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
