import { TestBed } from '@angular/core/testing';

import { CorennService } from './corenn.service';

describe('CorennService', () => {
  let service: CorennService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorennService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
