import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/singleton-service/shared.service';

@Component({
  selector: 'app-irmao1',
  templateUrl: './irmao1.component.html',
  styleUrls: ['./irmao1.component.scss']
})
export class Irmao1Component implements OnInit {

  dataService: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getDataShared().subscribe(data => {
      this.dataService = data;
    })
  }

}
