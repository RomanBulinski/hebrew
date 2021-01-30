import { TestBed } from '@angular/core/testing';

import { ElementComparatorService } from './element-comparator.service';

describe('ElementComparatorService', () => {
  let service: ElementComparatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementComparatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
