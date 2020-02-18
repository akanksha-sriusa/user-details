import { TestBed } from '@angular/core/testing';

import { UserinformationService } from './userinformation.service';

describe('UserinformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserinformationService = TestBed.get(UserinformationService);
    expect(service).toBeTruthy();
  });
});
