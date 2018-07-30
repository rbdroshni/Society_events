import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerEventFormComponent } from './owner-event-form.component';

describe('OwnerEventFormComponent', () => {
  let component: OwnerEventFormComponent;
  let fixture: ComponentFixture<OwnerEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
