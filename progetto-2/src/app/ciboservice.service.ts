import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiboserviceService {

  constructor(private http: HttpClient) { }

  allFood() {
    const url = 'https://world.openfoodfacts.org/?json=true&page_size=10';
    let obsFood = this.http.get(url);
    return obsFood;
  }
  searchFood(query : string) {
    
    const url = `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${query}&page_size=10&json=true`;
    return this.http.get(url);
  }
  getFood(id : string) {
    
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}.json`;
    return this.http.get(url);
  }
}
