import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionBenevolatComponent } from './adhesion-benevolat.component';

describe('AdhesionBenevolatComponent', () => {
  let component: AdhesionBenevolatComponent;
  let fixture: ComponentFixture<AdhesionBenevolatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdhesionBenevolatComponent]
    });
    fixture = TestBed.createComponent(AdhesionBenevolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
