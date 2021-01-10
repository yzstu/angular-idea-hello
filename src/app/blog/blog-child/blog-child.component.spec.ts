import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogChildComponent } from './blog-child.component';

describe('BlogChildComponent', () => {
  let component: BlogChildComponent;
  let fixture: ComponentFixture<BlogChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
