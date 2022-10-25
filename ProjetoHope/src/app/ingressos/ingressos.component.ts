import { IngressosService } from './../Servicos/ingressos.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Ingresso } from './ingresso';
import { MatListItem } from '@angular/material/list';



schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.component.html',
  styleUrls: ['../app.component.scss']
})
export class IngressosComponent implements OnInit {

  ingressos: Ingresso[] | undefined;
  ingressoSelecionado: Ingresso | undefined;

  constructor(private ingressosService: IngressosService) { }

  ngOnInit() {
    this.ingressos = this.ingressosService.getIngressos()
  }


  selecionar (ingresso: Ingresso){
    this.ingressoSelecionado = ingresso
    console.log()
  }



}
