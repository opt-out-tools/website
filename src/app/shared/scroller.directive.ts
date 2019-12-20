import {AfterViewInit, Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appScroller]'
})
export class ScrollerDirective implements AfterViewInit {
  private scrolling: boolean;
  private page: number;

  constructor() {
    this.scrolling = false;
    this.page = -1;
  }

  ngAfterViewInit() {
    this.scrolling = false;
    this.page = -1;
  }

  @HostListener('window:scroll')
  @HostListener('dragstart')
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
