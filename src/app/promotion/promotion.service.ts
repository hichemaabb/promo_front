import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PromotionRequest} from "./promotionRequest";
import {PromotionResponse} from "./promotionResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private env: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<PromotionResponse[]> {
    let token = localStorage.getItem("access_token")
    let url = `${this.env}promotions`

    return this.http.get<PromotionResponse[]>(url)
  }
}
