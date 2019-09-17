import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';
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

@NgModule({
  declarations: [
    AppComponent,
    WhoComponent,
    WhyComponent,
    CommunityComponent,
    ResearchComponent,
    LawsComponent,
    StudiesComponent,
    HomeComponent,
    SurveyComponent,
    MultiStepFormComponent,
    ReportComponent,
    StepFormSelectorComponent,
    FormStepDirective
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
