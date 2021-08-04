import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private route: Router) { }

  canActivate(route:any, state: RouterStateSnapshot){
    return this.auth.user$.pipe(map(user => {
      if(user)
        return true;
      this.route.navigate(['/membering/login'], {queryParams: { returnUrl: state.url }});
      return false;
    }))
  }
}
