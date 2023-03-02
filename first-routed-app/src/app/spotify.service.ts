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
        'Bearer BQCphcSj-4JGvFC43hMLq-BuVg5RAF5L8d7-ixVG2edLih08Omeabgwu5rRDnnibP1VnvRq_OeE2DNOefRUbajQyUu9a5FhdympGZBpuYg12GUih6JutoXcgGyLY4GwQ53HR4KUyLtxQU04KuGQG_6PtK-qNj8tOtmi1L2f5oLv8RyI9AGAE_7L0a-it0Gsrw0Da'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}


