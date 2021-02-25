import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RegisterRequest} from '../models/RegisterRequest';
import {log} from 'util';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit, AfterViewInit {
  @ViewChild('regUsername', {read: false, static: false}) regUsername;

  public registerModel: RegisterRequest = new RegisterRequest();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.regUsername);
  }

}
