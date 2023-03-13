import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBUsFVzFQfxhZ8SKQFXA3UlgzQ38n9C7E2XuFf-UxWNoVn5lcNFHN5d0edNVRzI1g-TDjv7Z3BNKEeEmsfioWFFFgSClVPELkJOYzsSLxUEppDL_myUM5Ep7Rsx47FkyHL2Zx-G4MYwIBx0tEJc1NuLV23sLxGkcN_9hTf87zLsnPtiNAozHxOstHaKfb_10vvL'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBUsFVzFQfxhZ8SKQFXA3UlgzQ38n9C7E2XuFf-UxWNoVn5lcNFHN5d0edNVRzI1g-TDjv7Z3BNKEeEmsfioWFFFgSClVPELkJOYzsSLxUEppDL_myUM5Ep7Rsx47FkyHL2Zx-G4MYwIBx0tEJc1NuLV23sLxGkcN_9hTf87zLsnPtiNAozHxOstHaKfb_10vvL'
    });
    
    return this.http.get(url, { headers });
  }


}


