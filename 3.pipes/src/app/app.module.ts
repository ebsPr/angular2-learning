import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// inicio localización en español
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
// final localización en español
import { AppComponent } from './app.component';

import { CaptializadoPipe } from './pipes/capitalizado.pipe';
import {  DomSeguroPipe } from "./pipes/domseguro.pipe"
import { ContrasenyaPipe } from './pipes/contrasenya.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CaptializadoPipe,
    DomSeguroPipe,
    ContrasenyaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
