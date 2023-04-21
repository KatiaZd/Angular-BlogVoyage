import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisArticleComponent } from './avis-article.component';

describe('AvisArticleComponent', () => {
  let component: AvisArticleComponent;
  let fixture: ComponentFixture<AvisArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
