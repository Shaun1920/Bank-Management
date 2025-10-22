import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegist } from './user-regist';

describe('UserRegist', () => {
  let component: UserRegist;
  let fixture: ComponentFixture<UserRegist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
