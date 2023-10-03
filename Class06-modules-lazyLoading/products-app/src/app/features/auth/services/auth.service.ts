import { Injectable } from '@angular/core';
import { LoginUser } from '../interfaces/loginUser';
import { usersData } from '../../../db/users';
import { UserData, UserInputData } from '../interfaces/registerUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private USERS: LoginUser[] = users;
  private USERS_DATA: UserData[] = usersData
  private isUserLoggedIn: boolean = false;

  constructor() { }

  get isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  login(loginUserData: LoginUser): boolean {

    const {email, password} = loginUserData;

    const foundUser: UserData | undefined = this.USERS_DATA.find(user => user.email === email && user.password === password);

    if (foundUser) {
      this.isUserLoggedIn = true;
      return true;
    } else {
      this.isUserLoggedIn = false;
      return false
    }
    
  }

  register(registerUserData: UserInputData): boolean {
    const { email, password, ...userData } = registerUserData;

    const isEmailTaken: boolean = this.USERS_DATA.some(user => user.email === email);

    if (isEmailTaken) {
      return false;
    } else {
      const newUser: UserData = {
        id: this.generateCustomHex(24),
        email,
        password,
        ...userData
      }
      this.USERS_DATA.push(newUser);
      this.isUserLoggedIn = true;
      return true;
    }
    
  }

  generateCustomHex(length: number): string {
    const hexCharacters = '0123456789abcdef';
    let result: string = '';
    for (let i = 0; i < length; i++ ) {
      const randomIndex = Math.floor(Math.random() * hexCharacters.length);
      result += hexCharacters[randomIndex];
    }
    return result;
  }

}
