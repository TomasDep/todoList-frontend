import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  CanLoad, 
  Route, 
  RouterStateSnapshot, 
  UrlSegment, 
  Router 
} from '@angular/router';

import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Guardia para Verificar si el usuario esta autentificado
 */
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.validateToken()
                .pipe(
                  tap(isAuth => {
                    if (!isAuth) {
                      this.router.navigateByUrl('/login');
                    } 
                  })
                );
  }
  
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.validateToken()
                .pipe(
                  tap(isAuth => {
                    if (!isAuth) {
                      this.router.navigateByUrl('/login');
                    } 
                  })
                );
  }
}
