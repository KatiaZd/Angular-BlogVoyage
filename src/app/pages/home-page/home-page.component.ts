import { Component } from '@angular/core';
import { ARTICLES } from 'src/app/mocks/articles.mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  // Récupération du mock de données articles.mock.ts
  articles = ARTICLES;
  




  


}
