import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MultiStepFormComponent } from './shared/multi-step-form/multi-step-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './pages/report/report.component';
import { StepFormSelectorComponent } from './shared/step-form-selector/step-form-selector.component';
import { FormStepDirective } from './directives/form-step.directive';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { ScrollerDirective } from './directives/scroller.directive';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TechComponent } from './pages/tech/tech.component';
import { ResearchComponent } from './pages/research/research.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TakeActionComponent } from './pages/take-action/take-action.component';
import { BlogComponent } from './pages/blog/blog.component';
import {RedirectGuardService} from './services/redirect-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultiStepFormComponent,
    ReportComponent,
    StepFormSelectorComponent,
    FormStepDirective,
    AboutComponent,
    ScrollerDirective,
    TechComponent,
    ResearchComponent,
    FaqComponent,
    TakeActionComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, SlimLoadingBarModule
  ],
  providers: [RedirectGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
