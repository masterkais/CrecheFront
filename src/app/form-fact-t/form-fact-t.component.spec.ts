import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFactTComponent } from './form-fact-t.component';

describe('FormFactTComponent', () => {
  let component: FormFactTComponent;
  let fixture: ComponentFixture<FormFactTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFactTComponent]
    });
    fixture = TestBed.createComponent(FormFactTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
