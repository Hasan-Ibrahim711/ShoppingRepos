import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private userservice: UserService) { }
  
  canActivate(): Observable<boolean> {
    return this.userservice.AppUser$?.pipe(map(appuser=> appuser.isAdmin))
  }
}
