import { TestBed, inject } from '@angular/core/testing';

import { GetUserAlbumsService } from './get-user-albums.service';

describe('GetUserAlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUserAlbumsService]
    });
  });

  it('should be created', inject([GetUserAlbumsService], (service: GetUserAlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
