import { TestBed, inject } from '@angular/core/testing';

import { GetImageInfoService } from './get-image-info.service';

describe('GetImageInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetImageInfoService]
    });
  });

  it('should be created', inject([GetImageInfoService], (service: GetImageInfoService) => {
    expect(service).toBeTruthy();
  }));
});
