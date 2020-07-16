import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISchool } from '../Interfaces/ISchool';
import { IAddress } from '../Interfaces/IAddress';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllSchools(): Observable<ISchool[]> {
    return this.http.get<ISchool[]>(this.url);
  }
}
