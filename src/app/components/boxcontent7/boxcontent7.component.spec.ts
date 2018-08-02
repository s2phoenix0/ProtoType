import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent7Component } from './boxcontent7.component';

describe('Boxcontent7Component', () => {
  let component: Boxcontent7Component;
  let fixture: ComponentFixture<Boxcontent7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
