import { IngressosService } from './../Servicos/ingressos.service';
import { Ingresso } from './../ingressos/ingresso';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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


  constructor(private route: ActivatedRoute, private ingressoService: IngressosService, private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.ingresso = this.ingressoService.getIngresso(id)[0]
  }

  voltar(){
    this.location.back()
  }

}
