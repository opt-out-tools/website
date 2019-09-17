import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';
import {HomeComponent} from './home/home.component';
import {CommunityComponent} from './community/community.component';
import {ResearchComponent} from './research/research.component';
import {LawsComponent} from './laws/laws.component';
import {StudiesComponent} from './studies/studies.component';
import {SurveyComponent} from './survey/survey.component';
import {ReportComponent} from './report/report.component';

const routes: Routes = [
  { path: 'who', component: WhoComponent },
  { path: 'why', component: WhyComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'laws', component: LawsComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'report', component: ReportComponent },
  { path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '', component: HomeComponent },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
