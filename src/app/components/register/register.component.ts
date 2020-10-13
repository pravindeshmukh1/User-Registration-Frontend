import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  constructor(private snackBar: MatSnackBar) {}

  firstName = new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.minLength(3),
    Validators.required,
  ]);
  lastName = new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.minLength(3),
    Validators.required,
  ]);

  emailId = new FormControl('', [Validators.email, Validators.required]);

  password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(15),
    Validators.required,
  ]);

  confirmPassword = new FormControl('', [
    RxwebValidators.compare({ fieldName: 'password' }),
  ]);

  getFirstNameErrorMessage() {
    return this.firstName.hasError('required')
      ? 'Enter first name'
      : 'First Name should be minimum of 3 charatere';
  }
  getLastNameErrorMessage() {
    return this.firstName.hasError('required')
      ? 'Enter last name'
      : 'Last Name should be minimum of 3 charatere';
  }
  getEmailIdErrorMessage() {
    return this.firstName.hasError('required')
      ? 'Choose a Email address'
      : 'Sorry. enter valid Email ID';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required')
      ? 'Password is Required'
      : 'Use 8 characters or more for your password';
  }
  getConfirmPasswordErrorMessage() {
    return this.confirmPassword.hasError('required')
      ? 'Password is Required'
      : `Those passwords didn't not match. Try again`;
  }

  onSubmit() {
    if (this.password.value === this.confirmPassword.value) {
      let userDetails = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        emailId: this.emailId.value,
        password: this.password.value,
      };
    }
  }
  ngOnInit(): void {}
}
