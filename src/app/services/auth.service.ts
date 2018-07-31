import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  private user: Observable<any>;

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

  // doGoogleLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.firebaseAuth.auth
  //       .signInWithPopup(provider)
  //       .then(res => {
  //         resolve(res);
  //       });
  //   });
  // }

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
