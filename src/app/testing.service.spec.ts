import { TestBed,inject } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: TestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingService);
  });

  it('should be created ok',inject([TestingService],(service:TestingService) => {
    expect(service).toBeTruthy();
  }));
});
