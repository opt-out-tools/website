import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { ResearchComponent } from './research/research.component';
import { LawsComponent } from './laws/laws.component';
import { StudiesComponent } from './studies/studies.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';
import { StepFormSelectorComponent } from './step-form-selector/step-form-selector.component';
import { FormStepDirective } from './directives/form-step.directive';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about/about1/about1.component';
import { About2Component } from './about/about2/about2.component';
import { About3Component } from './about/about3/about3.component';
import { WorkComponent } from './work/work.component';
import { Work1Component } from './work/work1/work1.component';
import { Work2Component } from './work/work2/work2.component';
import { Work3Component } from './work/work3/work3.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    ResearchComponent,
    LawsComponent,
    StudiesComponent,
    HomeComponent,
    SurveyComponent,
    MultiStepFormComponent,
    ReportComponent,
    StepFormSelectorComponent,
    FormStepDirective,
    AboutComponent,
    About1Component,
    About2Component,
    About3Component,
    WorkComponent,
    Work1Component,
    Work2Component,
    Work3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
