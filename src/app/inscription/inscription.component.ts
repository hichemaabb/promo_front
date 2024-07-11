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
  styleUrl: './inscription.component.scss'
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

    return ""
  }

  inscrire() {
    this.inscriptionService.inscriptionUtilisateur({
      nom: this.nom,
      prenom: this.prenom,
      tel: this.tel,
      mdp: this.password,
      email: this.email,
      date_naissance: this.date_naissance,
      date_creation:  this.getCurrentDate(),
    })
  }

}
