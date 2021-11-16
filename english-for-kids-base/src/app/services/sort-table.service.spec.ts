import { TestBed } from '@angular/core/testing';

import { SortTableService } from './sort-table.service';

describe('SortTableService', () => {
  let service: SortTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
