import { Injectable } from '@angular/core';
import { RegisterUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login () {}

  register (registerData: RegisterUser) {}
}
