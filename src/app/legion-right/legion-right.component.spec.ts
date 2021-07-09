import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionRightComponent } from './legion-right.component';

describe('LegionRightComponent', () => {
  let component: LegionRightComponent;
  let fixture: ComponentFixture<LegionRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegionRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
