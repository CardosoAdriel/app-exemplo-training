import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  isValid: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(event: any) {
    const data = event.form.value


    if(data.login && data.password){
      console.log(data)
    } else {
      this.isValid = false
    }
  }

}
