import { TestBed, inject } from '@angular/core/testing';

import { AdventureTimeService } from './adventure-time.service';

describe('AdventureTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdventureTimeService]
    });
  });

  it('should be created', inject([AdventureTimeService], (service: AdventureTimeService) => {
    expect(service).toBeTruthy();
  }));
});
