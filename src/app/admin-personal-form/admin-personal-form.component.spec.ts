import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonalFormComponent } from './admin-personal-form.component';

describe('AdminPersonalFormComponent', () => {
  let component: AdminPersonalFormComponent;
  let fixture: ComponentFixture<AdminPersonalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPersonalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
