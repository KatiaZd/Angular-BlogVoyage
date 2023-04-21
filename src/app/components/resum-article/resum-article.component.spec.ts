import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumArticleComponent } from './resum-article.component';

describe('ResumArticleComponent', () => {
  let component: ResumArticleComponent;
  let fixture: ComponentFixture<ResumArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
