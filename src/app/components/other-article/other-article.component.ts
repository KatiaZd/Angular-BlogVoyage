import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticles, ARTICLES } from 'src/app/mocks/articles.mock';

@Component({
  selector: 'app-other-article',
  templateUrl: './other-article.component.html',
  styleUrls: ['./other-article.component.css']
})
export class OtherArticleComponent {

  otherArticle: IArticles[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    //Je filtre mon tableau d'articles pour récupérer l'article qui correspond à l'id
    this.otherArticle = ARTICLES.filter(articles => articles.id === Number(id));

    //Je filtre mon tableau d'articles pour récupérer les articles qui ne sont pas en top
    this.otherArticle = ARTICLES.filter(articles => !articles.isTop);
  }
}