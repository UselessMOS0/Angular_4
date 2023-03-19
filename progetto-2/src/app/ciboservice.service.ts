import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiboserviceService {

  constructor(private http: HttpClient) { }

  allFood() {
    const url = 'https://world.openfoodfacts.org/?json=true';
    let obsFood = this.http.get(url);
    return obsFood;
  }
}
