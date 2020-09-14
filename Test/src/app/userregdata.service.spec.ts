import { TestBed } from '@angular/core/testing';

import { UserregdataService } from './userregdata.service';

describe('UserregdataService', () => {
  let service: UserregdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserregdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
