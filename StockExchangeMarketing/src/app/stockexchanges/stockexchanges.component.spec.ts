import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexchangesComponent } from './stockexchanges.component';

describe('StockexchangesComponent', () => {
  let component: StockexchangesComponent;
  let fixture: ComponentFixture<StockexchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockexchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockexchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
