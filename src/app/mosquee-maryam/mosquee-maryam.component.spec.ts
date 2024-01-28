import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueeMaryamComponent } from './mosquee-maryam.component';

describe('MosqueeMaryamComponent', () => {
  let component: MosqueeMaryamComponent;
  let fixture: ComponentFixture<MosqueeMaryamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosqueeMaryamComponent]
    });
    fixture = TestBed.createComponent(MosqueeMaryamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
