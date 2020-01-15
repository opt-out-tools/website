import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work1Component } from './work1.component';

describe('Work1Component', () => {
  let component: Work1Component;
  let fixture: ComponentFixture<Work1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
