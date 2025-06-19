import { TestBed } from '@angular/core/testing';

import { HeavyTaskWorkerService } from './heavy-task-worker.service';

describe('HeavyTaskWorkerService', () => {
  let service: HeavyTaskWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeavyTaskWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
