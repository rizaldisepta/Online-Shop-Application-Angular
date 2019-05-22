import { TestBed, inject } from '@angular/core/testing';

import { FakturService } from './faktur.service';

describe('FakturService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakturService]
    });
  });

  it('should be created', inject([FakturService], (service: FakturService) => {
    expect(service).toBeTruthy();
  }));
});
