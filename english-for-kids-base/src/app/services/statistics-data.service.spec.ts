import { TestBed } from '@angular/core/testing';

import { StatisticsDataService } from './statistics-data.service';

describe('StatisticsDataService', () => {
  let service: StatisticsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
