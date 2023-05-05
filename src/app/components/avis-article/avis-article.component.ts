import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avis-article',
  templateUrl: './avis-article.component.html',
  styleUrls: ['./avis-article.component.css']
})
export class AvisArticleComponent {

  @Input() positivePoints: string[] = [];
  @Input() negativePoints: string[] = [];
  @Input() tips: string[] = [];

}
