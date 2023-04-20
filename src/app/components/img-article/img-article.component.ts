import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLES, IArticles } from 'src/app/mocks/articles.mock';

@Component({
  selector: 'app-img-article',
  templateUrl: './img-article.component.html',
  styleUrls: ['./img-article.component.css']
})
export class ImgArticleComponent {

  imgArticle: IArticles [] = [];

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.imgArticle = ARTICLES.filter(articles => articles.id === Number(id));
  }

}
