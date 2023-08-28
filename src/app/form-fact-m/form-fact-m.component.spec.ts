import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFactMComponent } from './form-fact-m.component';

describe('FormFactMComponent', () => {
  let component: FormFactMComponent;
  let fixture: ComponentFixture<FormFactMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFactMComponent]
    });
    fixture = TestBed.createComponent(FormFactMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
