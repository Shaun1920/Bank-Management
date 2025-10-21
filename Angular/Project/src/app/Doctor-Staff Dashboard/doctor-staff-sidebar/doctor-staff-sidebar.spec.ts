import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorStaffSidebar } from './doctor-staff-sidebar';

describe('DoctorStaffSidebar', () => {
  let component: DoctorStaffSidebar;
  let fixture: ComponentFixture<DoctorStaffSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorStaffSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorStaffSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
