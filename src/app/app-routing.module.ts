import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ReportComponent} from './pages/report/report.component';
import {AboutComponent} from './pages/about/about.component';
import {WorkComponent} from './pages/work/work.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
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
  imports: [RouterModule.forRoot(routes, {
    scrollOffset: [0, 0], scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
