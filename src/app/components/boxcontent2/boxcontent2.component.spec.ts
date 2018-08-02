import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent2Component } from './boxcontent2.component';

describe('Boxcontent2Component', () => {
  let component: Boxcontent2Component;
  let fixture: ComponentFixture<Boxcontent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
