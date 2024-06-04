import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Razas } from './api-perro'; // Ajusta según la ubicación de tu interfaz

@Injectable({
  providedIn: 'root'
})
export class DataService{
  private apiUrl = 'https://dog.ceo/dog-api/'; // Ajusta a tu URL de API

  constructor(private http: HttpClient) { }

  loadPerro(nombre: string): Observable<Razas> {
    return this.http.get<Razas>(`${this.apiUrl}/${nombre}`);
  }
}
