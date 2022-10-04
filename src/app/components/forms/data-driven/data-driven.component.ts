import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss']
})
export class DataDrivenComponent implements OnInit {

  formLogin: any;

  constructor() { }

  ngOnInit(): void {

    this.formLogin = new FormGroup({
      login: new FormControl("", Validators.compose([
        Validators.required // campo é obrigatório
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
      ]))
    })

  }

  enviarDados(data: NgForm) {
    console.log(data)
  }

}
