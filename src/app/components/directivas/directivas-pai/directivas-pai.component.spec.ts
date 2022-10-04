import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasPaiComponent } from './directivas-pai.component';

describe('DirectivasPaiComponent', () => {
  let component: DirectivasPaiComponent;
  let fixture: ComponentFixture<DirectivasPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasPaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
