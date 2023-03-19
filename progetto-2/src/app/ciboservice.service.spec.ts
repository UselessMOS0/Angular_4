import { TestBed } from '@angular/core/testing';

import { CiboserviceService } from './ciboservice.service';

describe('CiboserviceService', () => {
  let service: CiboserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiboserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
