import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionComponent } from './legion.component';

describe('LegionComponent', () => {
  let component: LegionComponent;
  let fixture: ComponentFixture<LegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
