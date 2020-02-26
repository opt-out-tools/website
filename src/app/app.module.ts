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
import { About1Component } from './pages/about/about1/about1.component';
import { About2Component } from './pages/about/about2/about2.component';
import { About3Component } from './pages/about/about3/about3.component';
import { WorkComponent } from './pages/work/work.component';
import { Work1Component } from './pages/work/work1/work1.component';
import { Work2Component } from './pages/work/work2/work2.component';
import { Work3Component } from './pages/work/work3/work3.component';
import { ScrollerDirective } from './directives/scroller.directive';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TechComponent } from './pages/tech/tech.component';
import { ResearchComponent } from './pages/research/research.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TakeActionComponent } from './pages/take-action/take-action.component';
import { BlogComponent } from './pages/blog/blog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    Work3Component,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
