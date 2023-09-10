import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHomeComponent } from './image-home.component';

describe('ImageHomeComponent', () => {
  let component: ImageHomeComponent;
  let fixture: ComponentFixture<ImageHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageHomeComponent]
    });
    fixture = TestBed.createComponent(ImageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
