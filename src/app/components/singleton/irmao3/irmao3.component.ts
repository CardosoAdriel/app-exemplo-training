import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/singleton-service/shared.service';

@Component({
  selector: 'app-irmao3',
  templateUrl: './irmao3.component.html',
  styleUrls: ['./irmao3.component.scss']
})
export class Irmao3Component implements OnInit {

  dataService3: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getDataShared().subscribe(data => {
      this.dataService3 =  data
    })
  }

}
