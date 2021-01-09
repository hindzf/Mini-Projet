import { Injectable } from '@angular/core';
import { Star } from '../model/Star';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class StarService {
  apiURL: string = 'http://localhost:8080/stars/rest';
  stars : Star[] = [];
  star: Star = new Star(); 
  
  constructor(private http : HttpClient) {
    
   }

   listeStar(): Observable<Star[]> {
    return this.http.get<Star[]>(this.apiURL) ;
   }


   ajouterStar( star : Star):Observable<Star>{
    return this.http.post<Star>(this.apiURL, star, httpOptions);
    }


   supprimerStar(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }



    consulterStar(id: number): Observable<Star> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Star>(url);
      }


    updateStar(star :Star ) : Observable<Star>
    {
     return this.http.put<Star>(this.apiURL,star, httpOptions);
    }


}
