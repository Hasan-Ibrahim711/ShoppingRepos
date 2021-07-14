import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AppUser } from '../models/appuser';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase,private auth:AuthService) { }

  save(user: firebase.User) {
    this.db.object('/user/' + user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }
  
  get AppUser$():Observable<AppUser>{
    return this.auth.user$.pipe(
      switchMap(user => {
      if(user)
        return this.db.object('/user/' + user.uid).valueChanges()
      else
        return of(null)
    }));
  }
}
