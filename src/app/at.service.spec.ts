import { TestBed, inject } from '@angular/core/testing';

import { AtService } from './at.service';

describe('AtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtService]
    });
  });

  it('should be created', inject([AtService], (service: AtService) => {
    expect(service).toBeTruthy();
  }));
});
