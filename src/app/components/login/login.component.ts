import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  emailId = new FormControl('', [Validators.email, Validators.required]);

  password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(15),
    Validators.required,
  ]);
  getEmailIdErrorMessage() {
    return this.emailId.hasError('required')
      ? 'Choose a Email address'
      : 'Sorry. enter valid Email ID';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required')
      ? 'Password is Required'
      : 'Use 8 characters or more for your password';
  }
  signIn() {
    try {
      if (this.emailId.value == '' || this.password.value == '') {
        throw 'Fields can not empty ';
      }
      let userData = {
        emailId: this.emailId.value,
        password: this.password.value,
      };
      console.log(userData);
      this.userService.logIn(userData).subscribe(
        (res) => {
          this.snackBar.open('User Sucessfully Sign In', '', {
            duration: 2000,
          });
        },
        (err) => {
          this.snackBar.open('please enter valid Email Id and Password', '', {
            duration: 4000,
          });
        }
      );
    } catch (error) {
      this.snackBar.open(error, '', {
        duration: 2000,
      });
    }
  }
  ngOnInit(): void {}
}
