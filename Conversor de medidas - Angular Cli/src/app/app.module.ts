import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KilometroParaMetroPipe } from './pipes/kilometro-para-metro.pipe';
import { MetroParaKilometroPipe } from './pipes/metro-para-kilometro.pipe';
import { CentimetroParaMetroPipe } from './pipes/centimetro-para-metro.pipe';
import { MetroParaCentimetroPipe } from './pipes/metro-para-centimetro.pipe';
import { KilometroParaCentimetroPipe } from './pipes/kilometro-para-centimetro.pipe';
import { CentimetroParaKilometroPipe } from './pipes/centimetro-para-kilometro.pipe';

// Não esquecer de importar o FormsModule e as pipes
// Declarar as pipes no @NgModule e importar o Forms

@NgModule({
  declarations: [
    AppComponent,
    KilometroParaMetroPipe,
    MetroParaKilometroPipe,
    CentimetroParaMetroPipe,
    MetroParaCentimetroPipe,
    KilometroParaCentimetroPipe,
    CentimetroParaKilometroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
