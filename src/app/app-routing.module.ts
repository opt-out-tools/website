import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CommunityComponent} from './community/community.component';
import {ResearchComponent} from './research/research.component';
import {LawsComponent} from './laws/laws.component';
import {StudiesComponent} from './studies/studies.component';
import {SurveyComponent} from './survey/survey.component';
import {ReportComponent} from './report/report.component';
import {AboutComponent} from './about/about.component';
import {WorkComponent} from './work/work.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'laws', component: LawsComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'report', component: ReportComponent },
  { path: 'work', component: WorkComponent },
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
