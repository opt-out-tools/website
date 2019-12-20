import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormStepDirective } from '../directives/form-step.directive';
import {Router} from '@angular/router';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit, AfterContentInit {
  @Input() formData: any;
  @Input() startStep: number;
  @Output() nextAction = new EventEmitter<any>();
  @Output() submitAction = new EventEmitter<any>();
  @Output() finishAction = new EventEmitter<any>();
  @ContentChildren(TemplateRef) divs: QueryList<TemplateRef<FormStepDirective>>;
  step = 0;
  currentView: TemplateRef<any>;


  constructor(private router: Router) {
    this.nextStepHandle = this.nextStepHandle.bind(this);
    this.backStepHandle = this.backStepHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.finishHandle = this.finishHandle.bind(this);
  }

  ngOnInit() {
  }
  renderForm() {
    this.currentView = this.divs.toArray()[this.step];
  }
  ngAfterContentInit() {
    this.renderForm();
  }

  nextStepHandle(value) {
    this.nextAction.emit(value);
    this.step++;
    this.renderForm();
  }
  backStepHandle() {
    this.step--;
    this.renderForm();
  }
  submitHandle(value) {
    this.submitAction.emit(value);
    this.step++;
    this.renderForm();
    // this.nextAction.emit(value);
  }
  finishHandle(value) {
    this.finishAction.emit(value);
    this.router.navigate(['/home']);
  }

}
