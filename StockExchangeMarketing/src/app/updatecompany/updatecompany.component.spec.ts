import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecompanyComponent } from './updatecompany.component';

describe('UpdatecompanyComponent', () => {
  let component: UpdatecompanyComponent;
  let fixture: ComponentFixture<UpdatecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
