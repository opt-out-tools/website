import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ReportComponent} from './pages/report/report.component';
import {AboutComponent} from './pages/about/about.component';
import {ResearchComponent} from './pages/research/research.component';
import {TechComponent} from './pages/tech/tech.component';
import {FaqComponent} from './pages/faq/faq.component';
import {TakeActionComponent} from './pages/take-action/take-action.component';
import {RedirectGuardService} from './services/redirect-guard.service';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'tech', component: TechComponent },
  { path: 'report', component: ReportComponent },
  { path: 'research', component: ResearchComponent },
  {
    path: 'blog',
    canActivate: [RedirectGuardService],
    component: RedirectGuardService,
    data: {
      externalUrl: 'https://medium.com/opt-out-tools'
    }
  },
  {
    path: 'extension',
    canActivate: [RedirectGuardService],
    component: RedirectGuardService,
    data: {
      externalUrl: 'https://addons.mozilla.org/en-US/firefox/addon/opt-out-tools/?src=search'
    }
  },
  {
    path: 'donate',
    canActivate: [RedirectGuardService],
    component: RedirectGuardService,
    data: {
      externalUrl: 'https://opencollective.com/opt-out-tools'
    }
  },
  {
    path: 'twitter',
    canActivate: [RedirectGuardService],
    component: RedirectGuardService,
    data: {
      externalUrl: 'https://twitter.com/optoutools'
    }
  },
  {
    path: 'github',
    canActivate: [RedirectGuardService],
    component: RedirectGuardService,
    data: {
      externalUrl: 'https://github.com/opt-out-tools/start-here'
    }
  },
  { path: 'faq', component: FaqComponent },
  { path: 'takeAction', component: TakeActionComponent},
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
  imports: [RouterModule.forRoot(routes, {
    scrollOffset: [0, 0], scrollPositionRestoration: 'top'
  })],
  providers: [RedirectGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
