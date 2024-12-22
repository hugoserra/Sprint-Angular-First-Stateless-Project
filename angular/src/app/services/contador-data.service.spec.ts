import { TestBed } from '@angular/core/testing';

import { ContadorDataService } from './contador-data.service';

describe('ContadorDataService', () => {
  let service: ContadorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
