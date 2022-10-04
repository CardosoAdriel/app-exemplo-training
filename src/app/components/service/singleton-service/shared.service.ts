import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataShared = new BehaviorSubject<any>("Dado do shared service")

  constructor() {
    console.log("shared instanciado")
  }

  public getDataShared(): Observable<any> {
    return this.dataShared.asObservable();
  }

  public setDataShared(value: any) {
    this.dataShared.next(value);
  }
}
