declare var google: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '',
      callback: (resp:any)=> {

      }
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'),{
      theme:'outline',
      size:'large',
      width: '100%',
      logo_alignment: "center",
      locale: "en_EN",
    })
  }

}
