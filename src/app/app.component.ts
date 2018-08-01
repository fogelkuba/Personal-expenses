import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Personal Expenses';
  user: object;
  itemValue = '';
  items: Observable<any>;

  constructor(
    public db: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth,
    private authService: AuthService) {
    this.items = db.list('items').valueChanges();
    this.items.subscribe((items) => {
      console.log(items);
    });
    // this.getUser();
  }

  onSubmit() {
    console.log(this.user);
    this.db.list('/items').push({
      // author: user.displayName,
      content: this.itemValue
    });
    this.itemValue = '';
  }

  onClickLogout() {
    this.authService.logout();
  }

  getLoginState() {
    console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }

  onClickLogin() {
    this.authService.signInWithGoogle();
  }
}
