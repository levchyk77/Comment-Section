import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentsComponent } from './create-comments.component';

describe('CreateCommentsComponent', () => {
  let component: CreateCommentsComponent;
  let fixture: ComponentFixture<CreateCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
