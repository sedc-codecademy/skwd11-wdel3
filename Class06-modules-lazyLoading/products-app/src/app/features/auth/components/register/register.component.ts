import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInputData } from 'src/app/features/auth/interfaces/registerUser.interface';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        firstName: new FormControl(),
        lastName: new FormControl(),
        address: new FormControl(),
        termsAndConditions: new FormControl(false, Validators.requiredTrue)
      }
    )
  }

  onRegisterFormSubmit(): void {
    console.log(this.registerForm);

    if (this.registerForm.valid) {
      const userEmail = this.registerForm.get('email')?.value;
      const userPassword = this.registerForm.get('password')?.value;
      const userFirstName = this.registerForm.get('fistName')?.value;
      const userLastName = this.registerForm.get('lastName')?.value;
      const userAddress = this.registerForm.get('address')?.value;
      const userTermsAndConditions = this.registerForm.get('termsAndConditions')?.value;

      const userData: UserInputData = {
        email: userEmail,
        password: userPassword,
        firstName: userFirstName,
        lastName: userLastName,
        address: userAddress,
        termsAndConditions: userTermsAndConditions
      }

      const registerSuccessful: boolean = this.authService.register(userData);
      // console.log(registerSuccessful);

      if (registerSuccessful) {
        console.log('Register successful');
      } else {
        console.log('Register unsuccessful');
      }
    }

  }
}
