import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quadri-img-article',
  templateUrl: './quadri-img-article.component.html',
  styleUrls: ['./quadri-img-article.component.css']
})
export class QuadriImgArticleComponent {

  @Input() gallery: string[] = [];

}
