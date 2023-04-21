import { Component } from '@angular/core';
import { IArticles, ARTICLES } from '../../mocks/articles.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  // Je filtre mon tableau d'articles pour récupérer les articles qui sont en top
  
  

   lastArticle = ARTICLES.filter((articles: IArticles) => articles.isTop === true);
   

  // constructor(private router: ActivatedRoute) {}

    ngOnInit() {
  //     // Je récupère l'id de l'article

  //     const id = this.router.snapshot.paramMap.get('id');

  //     // Je filtre mon tableau d'articles pour récupérer l'article qui correspond à l'id

     

  console.log('bonjour');

  //     console.log(this.lastArticle);
   }

}
