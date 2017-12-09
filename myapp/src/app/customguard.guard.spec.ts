import { TestBed, async, inject } from '@angular/core/testing';

import { CustomguardGuard } from './customguard.guard';

describe('CustomguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomguardGuard]
    });
  });

  it('should ...', inject([CustomguardGuard], (guard: CustomguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
