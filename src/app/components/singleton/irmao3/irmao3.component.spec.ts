import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Irmao3Component } from './irmao3.component';

describe('Irmao3Component', () => {
  let component: Irmao3Component;
  let fixture: ComponentFixture<Irmao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Irmao3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Irmao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
