import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-img-article',
  templateUrl: './img-article.component.html',
  styleUrls: ['./img-article.component.css']
})
export class ImgArticleComponent {

// Import des données que j'ai besoin depuis le parent (page Article)

  @Input() dataCountry!: string;
  @Input() dataCity!: string;
  @Input() dataStartDate!: Date;
  @Input() dataEndDate!: Date;
  @Input() dataMainImage!: string;

}
