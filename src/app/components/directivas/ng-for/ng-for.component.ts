import { Component, OnInit } from '@angular/core';

interface user {
  login: string,
  senha: any,
  email: string
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})

export class NgForComponent implements OnInit {
  titleNgFor: string = "ngFor"

  times: string[] = ["São Paulo", "Palmeiras", "Santos", "Corinthians"]

  users: user[] = [
    {login: "admin", senha: "admin", email: "admin@admin"},
    {login: "roberto", senha: "roberto123", email: "roberto@roberto"},
    {login: "adriel", senha: "adriel", email: "adriel@adriel"},
    {login: "diego", senha: "diego321", email: "diego@yahooo"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
