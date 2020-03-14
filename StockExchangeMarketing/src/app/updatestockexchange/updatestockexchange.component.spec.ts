import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestockexchangeComponent } from './updatestockexchange.component';

describe('UpdatestockexchangeComponent', () => {
  let component: UpdatestockexchangeComponent;
  let fixture: ComponentFixture<UpdatestockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatestockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
