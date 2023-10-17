import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser, User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedUser: User | null;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  };

  onLogin(): void {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const userEmail: string = this.loginForm.get('email')?.value;
      const userPassword: string = this.loginForm.get('password')?.value;

      const credentials: LoginUser = {
        email: userEmail,
        password: userPassword,
      };

      this.authService.login(credentials).subscribe((res) => {
        this.loggedUser = res;
        if (this.loggedUser) {
          this.router.navigate(['/movies']);
          this.loggerService.log('Login successful');
        } else {
          this.router.navigate(['/not-found']);
          this.loggerService.log('Login failed');
        }
      });
    }
  }
}
