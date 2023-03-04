import { TestBed } from '@angular/core/testing';

import { ApiRAMService } from './api-ram.service';

describe('ApiRAMService', () => {
  let service: ApiRAMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRAMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
