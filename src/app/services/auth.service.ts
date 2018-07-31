import { Injectable } from '@angular/core';

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

}
