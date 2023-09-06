import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDFILEComponent } from './add-file.component';

describe('ADDFILEComponent', () => {
  let component: ADDFILEComponent;
  let fixture: ComponentFixture<ADDFILEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ADDFILEComponent]
    });
    fixture = TestBed.createComponent(ADDFILEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
