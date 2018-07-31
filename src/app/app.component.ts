import {Component} from '@angular/core';
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

  itemValue = '';
  items: Observable<any>;

  constructor(
    public db: AngularFireDatabase,
    private authService: AuthService) {
    this.items = db.list('items').valueChanges();
    // console.log(this.items);
    this.items.subscribe((items) => {
      console.log(items);
    });
  }

  onSubmit() {
    this.db.list('/items').push({
      author: 'me',
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
    // this.authService.doGoogleLogin();
      // .then((res) => {
      //   console.log('success');
      // })
      // .catch(err => conssole.log(err));
  }
}
