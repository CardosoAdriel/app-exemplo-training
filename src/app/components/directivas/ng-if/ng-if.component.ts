import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  titleNgIf: string = "ngIf | ngIf - else | hidden"
  mostrarOuNao: boolean = true;
  umNumero: number = 0

  constructor() { }

  ngOnInit(): void {
  }


  alterar() {
    this.mostrarOuNao = !this.mostrarOuNao
  }
}
