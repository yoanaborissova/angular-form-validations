import { Component, OnInit } from '@angular/core';
import {RegisterRequest} from '../models/RegisterRequest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(10)]],
        //TODO: Implement email logic 
        password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!#^_+%*?&])[A-Za-z\\d@$#!%^*?&_+]+')]]
      }
    );

    console.log(this.registerForm);
  }

}
