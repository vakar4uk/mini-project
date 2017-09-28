import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientaddComponent } from './patientadd.component';

describe('PatientaddComponent', () => {
  let component: PatientaddComponent;
  let fixture: ComponentFixture<PatientaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
