import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/index';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  private user: Observable<firebase.user>;

  constructor(
    private firebaseAuth: AngularFireAuth
  ) {
    this.user = firebaseAuth.authState;
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
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
