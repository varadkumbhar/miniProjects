import { TestBed } from '@angular/core/testing';

import { ClientSrvService } from './client-srv.service';

describe('ClientSrvService', () => {
  let service: ClientSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
