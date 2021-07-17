import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$:Observable<firebase.User |null>;
  constructor(
    private fireAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router)
  {
    this.user$=fireAuth.authState;
  }

  SignInWithGoogle() {
    let returnUrl: any=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl)
    this.fireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  SignInWithFacebook() {
    let returnUrl: any=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl)
    this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  }
  SignUpWithEmailAndPassword(email:string,password:string) {
    return this.fireAuth.createUserWithEmailAndPassword(email,password)
  }
  SignInWithEmailAndPassword(email:string,password:string) {
    let returnUrl: any=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl)
    return this.fireAuth.signInWithEmailAndPassword(email,password);
  }

  SignOut() {
    this.fireAuth.signOut();
  }
}
