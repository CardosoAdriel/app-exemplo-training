import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  dataTransform: string = "Dado a sEr TransformAdo"

  dataHoje = new Date()

  umJson = {name: 'Marcelo', idade: '18', endereco: {rua: 'rua quatro', numero: '98', bairro: "sei la ..."}}

  mesAno = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

  constructor() { }

  ngOnInit(): void {
  }

}
