import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyrelatedataComponent } from './companyrelatedata.component';

describe('CompanyrelatedataComponent', () => {
  let component: CompanyrelatedataComponent;
  let fixture: ComponentFixture<CompanyrelatedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyrelatedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyrelatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
