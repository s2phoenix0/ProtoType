import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent3Component } from './boxcontent3.component';

describe('Boxcontent3Component', () => {
  let component: Boxcontent3Component;
  let fixture: ComponentFixture<Boxcontent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
