import { TestBed, inject } from '@angular/core/testing';

import { MiserviceService } from './miservice.service';

describe('MiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiserviceService]
    });
  });

  it('should be created', inject([MiserviceService], (service: MiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
