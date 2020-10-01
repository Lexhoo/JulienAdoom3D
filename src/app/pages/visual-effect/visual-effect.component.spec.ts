import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualEffectComponent } from './visual-effect.component';

describe('VisualEffectComponent', () => {
  let component: VisualEffectComponent;
  let fixture: ComponentFixture<VisualEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
