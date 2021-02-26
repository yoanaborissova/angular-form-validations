import {Component, OnInit} from '@angular/core';
import {RegisterRequest} from '../models/RegisterRequest';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  public registerModel: RegisterRequest = new RegisterRequest();
  public validations: { [ref: string]: { [errorKey: string]: string } } = {};

  constructor() {
  }

  ngOnInit() {
  }

  validateUsername() {
    const ref = 'username';

    if (this.registerModel.username === '') {
      this.addError(ref, 'required', 'This field is required');
    } else {
      this.removeError(ref, 'required');
    }

    if (this.registerModel.username.length < 11) {
      this.addError(ref, 'minLength', 'The username has to contain at least 10 chars.');
    } else {
      this.removeError(ref, 'minLength');
    }

    console.log(this.validations);
  }

  validateEmail() {
    // TODO: validate email
  }

  validatePassword() {
    const ref = 'password';

    if (this.registerModel.password.length === 0) {
      this.addError(ref, 'required', 'This field is required.');
    } else {
      this.removeError(ref, 'required');
    }

    if (this.registerModel.password.length < 10) {
      this.addError(ref, 'minLength', 'The password has to contain at least 10 chars.');
    } else {
      this.removeError(ref, 'minLength');
    }

    if (!this.registerModel.password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#^_+%*?&])[A-Za-z\d@$#!%^*?&_+]+/)) {
      this.addError(ref, 'pattern', 'The password has to contain at least one small letter, one capital letter, one digit and one special symbol.');
    } else {
      this.removeError(ref, 'pattern');
    }
  }

  addError(ref: string, errorName: string, errorMessage: string) {
    if (!this.validations[ref]) {
      this.validations[ref] = {};
    }

    this.validations[ref][errorName] = errorMessage;
  }

  removeError(ref: string, errorName: string) {
    delete this.validations[ref][errorName];
  }

  getErrors(ref: string) {
    if (!this.validations[ref]) {
      return [];
    }

    return Object.keys(this.validations[ref]).map(key => this.validations[ref][key]);
  }

  checkDisabled() {
    return Object.keys(this.validations).some(key => Object.keys(this.validations[key]).length > 0);
  }
}
