import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/singleton-service/shared.service';

@Component({
  selector: 'app-irmao2',
  templateUrl: './irmao2.component.html',
  styleUrls: ['./irmao2.component.scss']
})
export class Irmao2Component implements OnInit {

  dataService2: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getDataShared().subscribe(data => {
      this.dataService2 = data
    })
  }

}
