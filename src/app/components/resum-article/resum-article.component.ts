import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resum-article',
  templateUrl: './resum-article.component.html',
  styleUrls: ['./resum-article.component.css']
})
export class ResumArticleComponent {

  @Input() title!: string;
  @Input() text!: string;

}
