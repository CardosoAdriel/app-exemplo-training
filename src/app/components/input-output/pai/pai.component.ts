import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  tituloFilho: string = "novo titulo"

  dadoRecebido: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  receberEvento(event: any) {
    this.dadoRecebido = event
    alert(this.dadoRecebido)
  }

}
