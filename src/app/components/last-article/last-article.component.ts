import { Component } from '@angular/core';
import { IArticles, ARTICLES } from '../../mocks/articles.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  lastArticle: IArticles[] = [];

  constructor(private router: ActivatedRoute) {}

    ngOnInit() {
      // Je récupère l'id de l'article
      const id = this.router.snapshot.paramMap.get('id');

      // Je filtre mon tableau d'articles pour récupérer l'article qui correspond à l'id
      this.lastArticle = ARTICLES.filter( articles => articles.id === Number(id));

      // Je filtre mon tableau d'articles pour récupérer les articles qui sont en top
      this.lastArticle = ARTICLES.filter(articles => articles.isTop);   
  }

}
