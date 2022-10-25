import { NgModule } from '@angular/core';
import { DetalhesIngressosComponent } from './detalhes-ingressos/detalhes-ingressos.component';
import { IngressosComponent } from './ingressos/ingressos.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { IngressosService } from './Servicos/ingressos.service';

@NgModule({
  declarations: [
    AppComponent,
      IngressosComponent,
      DetalhesIngressosComponent
   ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    // FlexLayoutModule
  ],
  providers: [
    IngressosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
