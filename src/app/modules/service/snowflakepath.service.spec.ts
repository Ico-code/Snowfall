import { TestBed } from '@angular/core/testing';

import { SnowflakepathService } from './snowflakepath.service';

describe('SnowflakepathService', () => {
  let service: SnowflakepathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnowflakepathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
