import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent4Component } from './boxcontent4.component';

describe('Boxcontent4Component', () => {
  let component: Boxcontent4Component;
  let fixture: ComponentFixture<Boxcontent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
