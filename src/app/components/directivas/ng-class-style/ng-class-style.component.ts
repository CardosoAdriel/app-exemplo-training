import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styleUrls: ['./ng-class-style.component.scss']
})
export class NgClassStyleComponent implements OnInit {
  titleNgStyle: string = "ngStyle"
  titleNgClass: string = "ngClass"

  subTitleClass!: boolean
  testClass!: string

  tamanho: number = 12;
  color: string = '#380f6c';
  estiloClasse = {
    'color': '#35a1b5',
    'font-size.px': 20,
    'font-weight':'bold'
  }

  constructor() { }

  ngOnInit(): void {
  }

  alterClass(data?: string) {

    if(data) {
      this.testClass = data
    } else {
      this.subTitleClass = !this.subTitleClass
    }
  }

}
