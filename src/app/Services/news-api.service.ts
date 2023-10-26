import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

 apiKey = environment.apiKey
  constructor(private _http:HttpClient) { }

 topHeading():Observable<any>{
  return this._http.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.apiKey}`)
 }
 technology():Observable<any>{
  return this._http.get(`https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey=${this.apiKey}`)
 }
 business():Observable<any>{
  return this._http.get(`https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=${this.apiKey}`)
 }
 sports():Observable<any>{
  return this._http.get(`https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=${this.apiKey}`)
 }
 entertainment():Observable<any>{
  return this._http.get(`https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey=${this.apiKey}`)
 }
}