import { Injectable } from '@angular/core';
import { LoginUser } from '../interfaces/loginUser';
import { users } from '../db/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USERS: LoginUser[] = users;
  private isUserLoggedIn: boolean = false;

  constructor() { }

  login(loginUserData: LoginUser): boolean {

    const {email, password} = loginUserData;

    if (email === this.USERS[0].email && password === this.USERS[0].password) {
      this.isUserLoggedIn = true;
      return true;
    } else {
      this.isUserLoggedIn = false;
      return false
    }

  }

  get isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

}
