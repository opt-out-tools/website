import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work2Component } from './work2.component';

describe('Work2Component', () => {
  let component: Work2Component;
  let fixture: ComponentFixture<Work2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
