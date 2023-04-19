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
      const id = this.router.snapshot.paramMap.get('id');
      this.lastArticle = ARTICLES.filter( articles => articles.id === Number(id));
      this.lastArticle = ARTICLES.filter(articles => articles.isTop);   
  }


}
