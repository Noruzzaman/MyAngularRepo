import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


  readonly apiUrl = 'https://localhost:7049/';

  constructor(private http: HttpClient) { }

  // Employee
  getFurnitureList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'furnitures');
  }

  addFurniture(furn: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'furnitures/create', furn, httpOptions);
  }

  updateFurniture(furn: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'furnitures/update/', furn, httpOptions);
  }

  deleteFurniture(furnId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'furnitures/delete/' + furnId, httpOptions);
  }

}

