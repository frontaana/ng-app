import { TestBed } from '@angular/core/testing';

import { GithubListService } from './github-list.service';

describe('GithubListService', () => {
  let service: GithubListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
