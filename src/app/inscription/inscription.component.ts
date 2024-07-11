import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InscriptionService} from "./inscription.service";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  nom: string = ""
  prenom: string = ""
  email: string = ""
  tel: string = ""
  date_naissance: string = ""
  password: string = ""
  confirm_pass: string = ""

  constructor(private inscriptionService: InscriptionService) {
  }

  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  inscrire() {
    this.inscriptionService.inscriptionUtilisateur({
      Nom: this.nom,
      Prenom: this.prenom,
      Tel: this.tel,
      mdp: this.password,
      email: this.email,
      DateNaissance: this.date_naissance,
      DateCreation:  this.getCurrentDate(),
    }).subscribe((value) => {
      console.log(value)
    })
  }

}
