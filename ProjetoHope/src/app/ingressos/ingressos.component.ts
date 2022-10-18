import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Ingresso } from './ingresso.service';
import { MatListItem } from '@angular/material/list';
import { INGRESSOS } from './ingressos.service'


schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.component.html',
  styleUrls: ['../app.component.scss']
})
export class IngressosComponent implements OnInit {

  ingressos: Ingresso[] = INGRESSOS;
  ingressoSelecionado: Ingresso | undefined;



  selecionar (ingresso: Ingresso){
    this.ingressoSelecionado = ingresso
    console.log('cliquei')
  }

  constructor() { }

  ngOnInit() {
  }


}
