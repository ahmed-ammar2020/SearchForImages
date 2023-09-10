import { TestBed } from '@angular/core/testing';

import { ImageFetchingService } from './image-fetching.service';

describe('ImageFetchingService', () => {
  let service: ImageFetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageFetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
