import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingOfComponent } from './making-of.component';

describe('MakingOfComponent', () => {
  let component: MakingOfComponent;
  let fixture: ComponentFixture<MakingOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakingOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
