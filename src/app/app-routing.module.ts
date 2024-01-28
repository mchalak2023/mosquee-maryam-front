import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {QuiSommesNousComponent} from "./qui-sommes-nous/qui-sommes-nous.component";
import {MosqueeMaryamComponent} from "./mosquee-maryam/mosquee-maryam.component";
import {EcoleComponent} from "./ecole/ecole.component";
import {HorairesDePriereComponent} from "./horaires-de-priere/horaires-de-priere.component";
import {RessourcesComponent} from "./ressources/ressources.component";
import {EvenementsComponent} from "./evenements/evenements.component";
import {DorousComponent} from "./dorous/dorous.component";
import {DonComponent} from "./don/don.component";
import {AdhesionBenevolatComponent} from "./adhesion-benevolat/adhesion-benevolat.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
  { path: 'mosquée-maryam', component: MosqueeMaryamComponent },
  { path: 'école', component: EcoleComponent },
  { path: 'horaires-prière', component: HorairesDePriereComponent },
  { path: 'ressources', component: RessourcesComponent },
  { path: 'évènements', component: EvenementsComponent },
  { path: 'dorous', component: DorousComponent },
  { path: 'don', component: DonComponent },
  { path: 'adhésion-bénévolat', component: AdhesionBenevolatComponent },
  { path: 'contact', component: ContactComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
