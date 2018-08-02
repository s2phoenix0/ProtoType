import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent6Component } from './boxcontent6.component';

describe('Boxcontent6Component', () => {
  let component: Boxcontent6Component;
  let fixture: ComponentFixture<Boxcontent6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
