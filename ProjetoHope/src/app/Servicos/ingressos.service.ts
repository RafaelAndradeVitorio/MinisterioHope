import { INGRESSOS } from './../ingressos/INGRESSOS';
import { Ingresso } from './../ingressos/ingresso';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngressosService {

  constructor() { }

  getIngressos(): Ingresso[]{
    return INGRESSOS
  }
}
