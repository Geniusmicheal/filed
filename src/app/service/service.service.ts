import { Injectable } from '@angular/core';
import { User } from './../registration/user/user.model';
import { Ads } from './../registration/ads/ads.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }
  private _serverUrl = "http://localhost:3000/";

  addAds(staff: Ads): Observable<any> {
    return this.http.post(`${this. _serverUrl}ads`, staff);
  }


  addUser(staff: User): Observable<any> {
    return this.http.post(`${this. _serverUrl}user`, staff);
  }
}
