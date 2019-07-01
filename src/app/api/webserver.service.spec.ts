import { TestBed } from '@angular/core/testing';

import { WebserverService } from './webserver.service';

describe('WebserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebserverService = TestBed.get(WebserverService);
    expect(service).toBeTruthy();
  });
});
