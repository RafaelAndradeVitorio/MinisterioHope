import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DetalhesIngressosComponent } from './detalhes-ingressos/detalhes-ingressos.component';
import { ContatoComponent } from './contato/contato.component';
import { IngressosComponent } from './ingressos/ingressos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'ingressos',     component: IngressosComponent },
  { path: 'contato',     component: ContatoComponent },
  { path: 'detalhes/:id', component: DetalhesIngressosComponent },
  { path: 'sobre-nos', component: SobreNosComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
