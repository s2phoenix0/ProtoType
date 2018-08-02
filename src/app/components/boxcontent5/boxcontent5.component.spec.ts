import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent5Component } from './boxcontent5.component';

describe('Boxcontent5Component', () => {
  let component: Boxcontent5Component;
  let fixture: ComponentFixture<Boxcontent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
