import { TestBed } from '@angular/core/testing';

import { Communicationservice } from './communicationservice';

describe('Communicationservice', () => {
  let service: Communicationservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Communicationservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
