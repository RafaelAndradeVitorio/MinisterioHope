/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngressoService } from './ingresso.service';

describe('Service: Ingresso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngressoService]
    });
  });

  it('should ...', inject([IngressoService], (service: IngressoService) => {
    expect(service).toBeTruthy();
  }));
});
