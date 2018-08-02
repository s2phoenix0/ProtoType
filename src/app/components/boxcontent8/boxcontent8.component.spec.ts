import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxcontent8Component } from './boxcontent8.component';

describe('Boxcontent8Component', () => {
  let component: Boxcontent8Component;
  let fixture: ComponentFixture<Boxcontent8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxcontent8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxcontent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
