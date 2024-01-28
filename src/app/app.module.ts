import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { MosqueeMaryamComponent } from './mosquee-maryam/mosquee-maryam.component';
import { EcoleComponent } from './ecole/ecole.component';
import { HorairesDePriereComponent } from './horaires-de-priere/horaires-de-priere.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { DorousComponent } from './dorous/dorous.component';
import { DonComponent } from './don/don.component';
import { AdhesionBenevolatComponent } from './adhesion-benevolat/adhesion-benevolat.component';
import { ContactComponent } from './contact/contact.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    QuiSommesNousComponent,
    MosqueeMaryamComponent,
    EcoleComponent,
    HorairesDePriereComponent,
    RessourcesComponent,
    EvenementsComponent,
    DorousComponent,
    DonComponent,
    AdhesionBenevolatComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
