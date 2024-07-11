import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilisateurRequest} from "../inscription/utilisateurRequest";
import {Observable} from "rxjs";
import {UtilisateurResponse} from "../inscription/utilisateurResponse";
import {ConnexionRequest} from "./connexionRequest";
import {ConnexionResponse} from "./connexionResponse";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private env: string = "http://localhost:3000/";


  constructor(private http: HttpClient) { }

  connexionUtilisateur(connexionRequest: ConnexionRequest): Observable<ConnexionResponse> {
    let url = `${this.env}auth/login`

    return this.http.post<ConnexionResponse>(url, connexionRequest)
  }
}
