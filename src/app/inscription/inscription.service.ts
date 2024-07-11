import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilisateurRequest} from "./utilisateurRequest";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private env: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {  }

  inscriptionUtilisateur(utilisateurRequest: UtilisateurRequest) {
    let url = `${this.env}utilisateurs`

    return this.http.post<UtilisateurRequest>(url, utilisateurRequest)
  }
}
