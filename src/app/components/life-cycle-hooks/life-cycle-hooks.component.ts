import { Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
{

  text: string = "life-cycle-hook - "

  destroy: boolean = true;

  @Input() title: number = 0

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`${this.text} ngOnChanges`)
  }

  ngOnInit() {
    console.log(`${this.text} ngOnInit`)
  }

  ngDoCheck() {
    console.log(`${this.text} ngDoCheck`)
  }

  ngAfterViewInit() {
    console.log(`${this.text} ngAfterViewInit`)
  }

  ngAfterViewChecked() {
    console.log(`${this.text} ngAfterViewChecked`)
  }

  ngAfterContentInit() {
    console.log(`${this.text} ngAfterContentInit`)
  }

  ngAfterContentChecked() {
    console.log(`${this.text} ngAfterContentChecked`)
  }

  ngOnDestroy() {
    console.log(`${this.text} ngOnDestroy`)
  }

  alteraValor() {
    this.title++
  }

  destruir() {
    this.destroy = !this.destroy
  }
}
