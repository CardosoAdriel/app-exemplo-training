import { SharedService } from './../service/singleton-service/shared.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  alterarDataService(event: any) {
    const data = event.target.value

    this.sharedService.setDataShared(data);
  }

}
