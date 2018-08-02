import {Component, NgModule} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

// import {FormControl, Validators} from '@angular/forms';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule],
})

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
  categories = [
    {name: 'Grocery'},
    {name: 'Cinema'},
    {name: 'Restaurant'},
    {name: 'For Home'},
  ];
  users;


  constructor(
    public db: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth,
    private authService: AuthService) {
    this.items = db.list('items').valueChanges();
    this.items.subscribe((items) => {
      console.log(items);
    });
    this.getUser();

  }

  getUser() {
    this.user = this.authService.getUser().subscribe(
      user => {
        this.user = {
          email: user.email,
          name: user.displayName
        };
      });
  }

  getUsersList() {
    // this.items
  }

  onSubmit() {
    if (this.itemValue) {
      this.db.list('/items').push({
        author: this.user['name'],
        content: this.itemValue
      });
      this.itemValue = '';
    }
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
