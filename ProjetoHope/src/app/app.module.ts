import { LideresService } from './Servicos/lideres.service';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import { IngressosService } from './Servicos/ingressos.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
      IngressosComponent,
      DetalhesIngressosComponent,
      FooterComponent,
      HeaderComponent,
      HomeComponent,
      ContatoComponent,
      SobreNosComponent,
      LoginComponent
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
    FlexLayoutModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    IngressosService,
    LideresService
  ],
  entryComponents: [
   LoginComponent,
   FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
