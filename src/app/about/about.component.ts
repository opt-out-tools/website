import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private page: number;
  @ViewChild('about1', {read: ElementRef, static: false}) about1: ElementRef;
  @ViewChild('about2', {read: ElementRef, static: false}) about2: ElementRef;
  @ViewChild('about3', {read: ElementRef, static: false}) about3: ElementRef;
  private scrolling: boolean;

  constructor() {
    this.page = 1;
    this.scrolling = false;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'] )
  onScroll() {
    if (!this.scrolling) {
      if (window.pageYOffset % window.innerHeight  !== 0) {
        this.scrolling = true;
      }
      if ((window.pageYOffset > window.innerHeight) && (window.pageYOffset < window.innerHeight * 2)) {
        if (this.page === 2) {
          window.scrollTo(0, 2 * window.innerHeight);
        } else {
          window.scrollTo(0, window.innerHeight);
        }
      } else if ((window.pageYOffset > 0) && (window.pageYOffset < window.innerHeight)) {
        if (this.page === 1) {
          window.scrollTo(0, window.innerHeight);
        } else {
          window.scrollTo(0, 0);
        }
      }
    }
    if (window.pageYOffset % window.innerHeight  === 0 ) {
      this.scrolling = false;
      this.page = window.pageYOffset / window.innerHeight + 1;
    }
  }
}
