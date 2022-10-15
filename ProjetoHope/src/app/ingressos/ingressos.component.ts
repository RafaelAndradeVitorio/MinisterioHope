import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Ingresso } from './ingresso.service';
import { MatListItem } from '@angular/material/list';

schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


const INGRESSOS: Ingresso[] = [
  {
    id: "1",
    horario: "12h",
    dia: "12/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg"
  },
  {
    id: "2",
    horario: "12h:10",
    dia: "10/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg"
  },
  {
    id: "3",
    horario: "12:20",
    dia: "11/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg"
  },
  {
    id: "4",
    horario: "12:30",
    dia: "10/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg"
  }
]

@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.component.html',
  styleUrls: ['../app.component.scss']
})
export class IngressosComponent implements OnInit {

  ingressos = INGRESSOS;
  selectedIngressos = INGRESSOS[0]

  constructor() { }

  ngOnInit() {
  }


}
