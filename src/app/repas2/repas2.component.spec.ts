import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repas2Component } from './repas2.component';

describe('Repas2Component', () => {
  let component: Repas2Component;
  let fixture: ComponentFixture<Repas2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Repas2Component]
    });
    fixture = TestBed.createComponent(Repas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
