import { TestBed } from '@angular/core/testing';

import { AllCareGiversService } from './all-care-givers.service';

describe('AllCareGiversService', () => {
  let service: AllCareGiversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCareGiversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
