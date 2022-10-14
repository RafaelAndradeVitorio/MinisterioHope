import { NgModule } from '@angular/core';
import { IngressosComponent } from './ingressos/ingressos.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
      IngressosComponent
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
    // FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
