import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProjectComponent } from './video-project.component';

describe('VideoProjectComponent', () => {
  let component: VideoProjectComponent;
  let fixture: ComponentFixture<VideoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
