import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {PromotionComponent} from "./promotion/promotion.component";
import {SalleComponent} from "./salle/salle.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "connexion", component: ConnexionComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "promotion", component: PromotionComponent },
  { path: "salle", component: SalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
