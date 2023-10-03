import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

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
  }
}
