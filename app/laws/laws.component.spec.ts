import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsComponent } from './laws.component';

describe('LawsComponent', () => {
  let component: LawsComponent;
  let fixture: ComponentFixture<LawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
