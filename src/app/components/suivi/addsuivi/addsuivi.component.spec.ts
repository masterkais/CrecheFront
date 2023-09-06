import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDSuiviComponent } from './addsuivi.component';

describe('ADDSuiviComponent', () => {
  let component: ADDSuiviComponent;
  let fixture: ComponentFixture<ADDSuiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ADDSuiviComponent]
    });
    fixture = TestBed.createComponent(ADDSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
