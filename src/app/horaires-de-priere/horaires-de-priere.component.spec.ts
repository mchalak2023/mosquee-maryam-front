import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesDePriereComponent } from './horaires-de-priere.component';

describe('HorairesDePriereComponent', () => {
  let component: HorairesDePriereComponent;
  let fixture: ComponentFixture<HorairesDePriereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorairesDePriereComponent]
    });
    fixture = TestBed.createComponent(HorairesDePriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
