import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opt-out';
  routerUrl: string;
  constructor(private router: Router) {
    this.routerUrl = router.url;
  }
}
