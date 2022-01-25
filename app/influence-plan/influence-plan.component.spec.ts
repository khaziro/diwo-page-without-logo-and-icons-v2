import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencePlanComponent } from './influence-plan.component';

describe('InfluencePlanComponent', () => {
  let component: InfluencePlanComponent;
  let fixture: ComponentFixture<InfluencePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
