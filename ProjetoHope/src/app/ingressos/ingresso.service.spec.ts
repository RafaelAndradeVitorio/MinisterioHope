/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Ingresso } from './ingresso.service';

describe('Service: Ingresso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ingresso]
    });
  });

  it('should ...', inject([Ingresso], (service: Ingresso) => {
    expect(service).toBeTruthy();
  }));
});
