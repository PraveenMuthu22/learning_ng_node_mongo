import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISchool } from '../Interfaces/ISchool';
import { IAddress } from '../Interfaces/IAddress';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  private url = 'http://localhost:3000';
  private schoolsSubject$: Subject<any>;

  constructor(private http: HttpClient) {
    this.schoolsSubject$ = new Subject<any>();
  }

  getAllSchools(): Observable<ISchool[]> {
    return this.http.get<ISchool[]>(this.url);
  }

  getSchoolById(id): Observable<ISchool> {
    const extension = `/${id}`;
    return this.http.get<ISchool>(this.url + extension);
  }

  addSchool(school: ISchool): Observable<any> {
    return this.http.post<any>(this.url, school,
      { responseType: 'text' });
  }

  forceUpdate() {
    this.schoolsSubject$.next();
  }

  listenForUpdates() {
    return this.schoolsSubject$.asObservable();
  }
}
