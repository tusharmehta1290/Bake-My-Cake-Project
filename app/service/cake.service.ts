import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../Models/cakes';
import { CakeRequest } from '../Models/cakerequests';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {


  cakeURL: string = "http://localhost:3000/cakes";

  constructor(private _http: HttpClient) { }

  getAllCakes(): Observable<Array<Cake>>
  {
    return this._http.get<Cake[]>(this.cakeURL);
  }

  getCake(id?: number): Observable<Cake> {
    return this._http.get<Cake>(`${this.cakeURL}/${id}`)
  }

  // Cake REQUESTS!

  cakeRequestURL: string ="http://localhost:3000/cakerequests";

  userSubmittedAnOrder(cakeRequest ?: CakeRequest): Observable <CakeRequest>
  {
    return this._http.post<CakeRequest>(this.cakeRequestURL,cakeRequest);
  }

  getAllCakeRequests(): Observable<Array<CakeRequest>> {
    return this._http.get<Array<CakeRequest>>(`${this.cakeRequestURL}`);
  }

  cakeCompleted(id: number)
  {
    return this._http.delete(`${this.cakeRequestURL}/${id}`);
  }
}
