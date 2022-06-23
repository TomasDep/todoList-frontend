import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, map, Observable, tap, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ILoginForm } from '../interfaces/login-form.interface';
import { IRegisterForm } from '../interfaces/register-form.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: String = environment.baseUrl;
  private user: User = new User('', '', '', '');

  constructor(private http: HttpClient, private router: Router) { }

  get token(): string {
    return sessionStorage.getItem('token') || '';
  }

  get headers(): object {
    return { headers: { 'x-token': this.token } };
  }

  setStorage(token: string): void {
    sessionStorage.setItem('token', token);
  }
  
  login(formData: ILoginForm): Observable<any> {
    return this.http.post(`${ this.baseUrl }/login`, formData)
                .pipe(
                  tap((resp: any) => {
                    this.setStorage(resp.token);
                  }) 
                );
  }

  register(formData: IRegisterForm): Observable<any> {
    return this.http.post(`${ this.baseUrl }/users`, formData)
              .pipe(
                tap((resp: any) => {
                  console.log(resp);
                  this.setStorage(resp.token);
                }) 
              );
  }

  validateToken(): Observable<boolean> {
    return this.http.get(`${ this.baseUrl }/renew`, this.headers)
                    .pipe(
                      map((resp: any) => {
                        const { uid, name, username } = resp.user;
                        this.user = new User(uid, name, username,);
                        this.setStorage(resp.token)
                        return true;
                      }),
                      catchError(error => of(false))
                    );
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}