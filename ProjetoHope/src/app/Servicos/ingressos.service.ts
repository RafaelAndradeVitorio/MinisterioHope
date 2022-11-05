import { INGRESSOS } from './../ingressos/INGRESSOS';
import { Ingresso } from './../ingressos/ingresso';
import { Injectable } from '@angular/core';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IngressosService {

  constructor() { }

  getIngressos(): Ingresso[]{
    return INGRESSOS
  }

  getIngresso( id: string){
     console.log(INGRESSOS.filter((ticket)=> ticket.id === id))
     return INGRESSOS.filter((ticket)=> ticket.id === id)
  }

  getIgressosDestaque(){
    return INGRESSOS.filter((ticket) => ticket.destaque)[0]
  }
}
