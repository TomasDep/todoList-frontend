import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  
  get headers(): object {
    return { headers: { 'x-token': this.token, } };
  }

  getAllTask(): Observable<any> {
    return this.http.get(`${ this.baseUrl }/tasks`, this.headers)
                .pipe(
                  map((resp: any) => resp.tasks)
                );
  }
}
