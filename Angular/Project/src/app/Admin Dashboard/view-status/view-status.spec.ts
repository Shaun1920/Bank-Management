import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStatuses } from './view-status';

describe('ViewStatus', () => {
  let component: ViewStatuses;
  let fixture: ComponentFixture<ViewStatuses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStatuses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStatuses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
