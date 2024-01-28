import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorousComponent } from './dorous.component';

describe('DorousComponent', () => {
  let component: DorousComponent;
  let fixture: ComponentFixture<DorousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DorousComponent]
    });
    fixture = TestBed.createComponent(DorousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
