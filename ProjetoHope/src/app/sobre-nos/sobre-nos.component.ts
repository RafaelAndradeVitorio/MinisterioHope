import { Lider } from './../shered/lider';
import { Component, OnInit } from '@angular/core';
import { Lideres } from '../shered/lideres';
import { LideresService } from '../Servicos/lideres.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent implements OnInit {

  constructor(private lideres: LideresService) { }
  lista: Lider[] = Lideres
  faUser = faUser;

  ngOnInit(): void {
  }

}
