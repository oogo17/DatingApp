/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlestifyService } from './alestify.service';

describe('Service: Alestify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlestifyService]
    });
  });

  it('should ...', inject([AlestifyService], (service: AlestifyService) => {
    expect(service).toBeTruthy();
  }));
});
