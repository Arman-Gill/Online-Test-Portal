import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('email') userkey! : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){
    localStorage.setItem('user', this.userkey.nativeElement.value);
  }

}
