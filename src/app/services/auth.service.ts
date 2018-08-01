import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
// import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class AuthService {
  private user;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.user = firebaseAuth.authState;
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  getUser() {
    let loggedUser;
    this.firebaseAuth.user.subscribe(user => {
      if (user) {
        console.log(user);
        loggedUser = user;
      }});
    return loggedUser;
  }

  isLoggedIn() {
    if (this.user == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => {
        console.log(res);
      });
  }
}
