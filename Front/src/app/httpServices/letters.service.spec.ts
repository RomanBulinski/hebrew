import { TestBed } from '@angular/core/testing';

import { LettersService } from './letters-http.service';

describe('LettersService', () => {
  let service: LettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
