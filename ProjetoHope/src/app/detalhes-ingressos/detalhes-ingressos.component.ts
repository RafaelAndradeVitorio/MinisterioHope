import { Ingresso } from './../ingressos/ingresso';
import { Component, Input, OnInit } from '@angular/core';
import { INGRESSOS } from '../ingressos/INGRESSOS';




@Component({
  selector: 'app-detalhes-ingressos',
  templateUrl: './detalhes-ingressos.component.html',
  styleUrls: ['./detalhes-ingressos.component.css']
})
export class DetalhesIngressosComponent implements OnInit {

  @Input()
    ingresso: Ingresso | undefined


  constructor() { }

  ngOnInit() {
  }

}
