import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userCredentials } from 'src/app/interfaces/userCredentials.inteface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isUserLoggedIn: boolean = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onLoginFormSubmit(): void {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const userEmail = this.loginForm.get('email')?.value;
      // const userEmail2 = this.loginForm.controls?.['email'].value;
      const userPassword = this.loginForm.get('password')?.value;

      const credentials: userCredentials = {
        email: userEmail,
        password: userPassword,
      };

      // Call the authService and attempt to login
      const loginSuccessful: boolean = this.authService.login(credentials);
      this.isUserLoggedIn = loginSuccessful;

      if (loginSuccessful) {
        console.log('Login successful!');
      } else {
        console.log('Login failed!');
      }
    }
  }
}
