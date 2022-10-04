import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  titleNgSwitch: string = "ngSwitch | ngSwitch - case"

  condicional: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  selecionar(data: number) {
    this.condicional = data;
  }

}
