import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})

export class FilhoComponent implements OnInit {

  @Input() titulo: string = ''

  @Output() dataEnviar = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  enviarEvento() {
    this.dataEnviar.emit("Valor Emitido Do Filho")
  }

}
