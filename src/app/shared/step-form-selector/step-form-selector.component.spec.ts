import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFormSelectorComponent } from './step-form-selector.component';

describe('StepFormSelectorComponent', () => {
  let component: StepFormSelectorComponent;
  let fixture: ComponentFixture<StepFormSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFormSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFormSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
