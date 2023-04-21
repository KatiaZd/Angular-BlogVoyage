import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadriImgArticleComponent } from './quadri-img-article.component';

describe('QuadriImgArticleComponent', () => {
  let component: QuadriImgArticleComponent;
  let fixture: ComponentFixture<QuadriImgArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadriImgArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadriImgArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
