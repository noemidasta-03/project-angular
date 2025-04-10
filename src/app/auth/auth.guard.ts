import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})



export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(childRoute:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    if(this.authService.isLoggedIn){
      return true;
    } else{
      this.router.navigate(['/login']).then(data =>console.log(data) ).catch(err =>{console.log(err)});
      return false;
    }
  }
}
