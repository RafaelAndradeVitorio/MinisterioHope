import { Injectable } from '@angular/core';
import {Lideres} from '../shered/lideres';
import { Lider } from '../shered/lider';

@Injectable({
  providedIn: 'root'
})
export class LideresService {

  constructor() { }

  getLideres(){
    return Lideres
  }

  getLideresByName(nome: string){
    return Lideres.filter((lider) => lider.nome === nome)
  }

  getLideresByFuncao(funcao: string){
    return Lideres.filter((lider) => lider.nome === funcao)[0]
  }

  getLideresDesc(){
    return Lideres.filter((destaque) => destaque.desc)[0]
  }
}
