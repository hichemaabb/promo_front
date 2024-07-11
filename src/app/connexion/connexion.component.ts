import { Component } from '@angular/core';
import {ConnexionService} from "./connexion.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

  email: string = "";
  mdp: string = "";

  constructor(private connexionService: ConnexionService) {
  }

  connexion() {
    this.connexionService.connexionUtilisateur({
      email: this.email,
      mdp: this.mdp
    }).subscribe((accessToken) => {
      console.log(accessToken)
    })
  }
}
