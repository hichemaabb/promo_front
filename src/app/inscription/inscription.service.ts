import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilisateurRequest} from "./utilisateurRequest";
import {Observable} from "rxjs";
import {UtilisateurResponse} from "./utilisateurResponse";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private env: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {  }

  inscriptionUtilisateur(utilisateurRequest: UtilisateurRequest): Observable<UtilisateurResponse> {
    let url = `${this.env}utilisateurs`

    return this.http.post<UtilisateurResponse>(url, utilisateurRequest)
  }
}
