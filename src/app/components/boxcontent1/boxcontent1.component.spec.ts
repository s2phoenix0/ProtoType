import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent1Component } from './boxcontent1.component';

describe('Boxcontent1Component', () => {
  let component: Boxcontent1Component;
  let fixture: ComponentFixture<Boxcontent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
