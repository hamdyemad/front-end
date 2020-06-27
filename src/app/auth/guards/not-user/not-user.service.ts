import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotUserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let authorized = this.authService.getIsAuth();
    console.log(authorized)
    if (authorized == false) {
      this.router.navigate(['/'])
      return false
    } else {
      return true
    }
  }
}
