import { TestBed } from '@angular/core/testing';

import { RouteredirectService } from './routeredirect.service';

describe('RouteredirectService', () => {
  let service: RouteredirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteredirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
