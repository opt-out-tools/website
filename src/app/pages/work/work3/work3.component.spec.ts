import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work3Component } from './work3.component';

describe('Work3Component', () => {
  let component: Work3Component;
  let fixture: ComponentFixture<Work3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
