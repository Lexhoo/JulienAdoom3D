import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUpComponent } from './image-up.component';

describe('ImageUpComponent', () => {
  let component: ImageUpComponent;
  let fixture: ComponentFixture<ImageUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
