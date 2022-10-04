import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})

export class DataBindingComponent implements OnInit {
  panelOpenState = false
  title: string = "App Data Binding title"

  likeAngular: boolean = true

  urlImageTraining: string = 'https://www.trainning.com.br/img/trainning-brand.png'

  valueInput: string = 'Valor atribuido no .ts'

  valueEvent: string = ''

  valueTwoWay: string = 'Carlos'
  constructor() { }

  ngOnInit(): void {

  }

  getTitle() {
    return this.title
  }

  emitirEvento() {
    alert("O evento foi emitido")
  }

  eventoKeyDown(event: any) {
    this.valueEvent = event.target.value
    console.log(event.target.value)
  }

}
