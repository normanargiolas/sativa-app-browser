import { TestBed } from '@angular/core/testing';

import { HttpIntercepterJwtAuthService } from './http-intercepter-jwt-auth.service';

describe('HttpIntercepterJwtAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterJwtAuthService = TestBed.get(HttpIntercepterJwtAuthService);
    expect(service).toBeTruthy();
  });
});
