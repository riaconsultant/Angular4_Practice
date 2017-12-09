import { TestBed, inject } from '@angular/core/testing';

import { UserpreferanceService } from './userpreferance.service';

describe('UserpreferanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserpreferanceService]
    });
  });

  it('should be created', inject([UserpreferanceService], (service: UserpreferanceService) => {
    expect(service).toBeTruthy();
  }));
});
