import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionLeftComponent } from './legion-left.component';

describe('LegionLeftComponent', () => {
  let component: LegionLeftComponent;
  let fixture: ComponentFixture<LegionLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegionLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
