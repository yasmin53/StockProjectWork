import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparecompaniesComponent } from './comparecompanies.component';

describe('ComparecompaniesComponent', () => {
  let component: ComparecompaniesComponent;
  let fixture: ComponentFixture<ComparecompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparecompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparecompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
