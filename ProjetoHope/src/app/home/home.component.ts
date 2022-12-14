import { Lider } from './../shered/lider';
import { LideresService } from './../Servicos/lideres.service';
import { Ingresso } from './../ingressos/ingresso';
import { PromotionService } from './../Servicos/promotion.service';

import { Component, OnInit } from '@angular/core';
import { IngressosService } from '../Servicos/ingressos.service';
import { Promotion } from '../shered/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ingresso: Ingresso | undefined;
  promotion: Promotion | undefined;
  lideres: Lider | undefined;

  constructor(private ingressosService : IngressosService, private promotionService : PromotionService, private lideresService: LideresService) { }

  ngOnInit(): void {
    this.ingresso = this.ingressosService.getIgressosDestaque()
    this.promotion = this.promotionService.getPromotionDestaque()
    this.lideres = this.lideresService.getLideresDesc()
  }



}
