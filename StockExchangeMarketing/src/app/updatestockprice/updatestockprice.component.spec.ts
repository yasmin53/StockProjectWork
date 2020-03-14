import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestockpriceComponent } from './updatestockprice.component';

describe('UpdatestockpriceComponent', () => {
  let component: UpdatestockpriceComponent;
  let fixture: ComponentFixture<UpdatestockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatestockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
