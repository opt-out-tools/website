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
    if (window.pageYOffset % window.innerHeight  === 0 ) {
      this.scrolling = false;
      this.page = window.pageYOffset / window.innerHeight;
    }
    if (!this.scrolling) {
      if (window.pageYOffset % window.innerHeight  !== 0) {
        this.scrolling = true;
      }
      if ((window.pageYOffset / window.innerHeight) > this.page) {
        window.scrollTo(0, (this.page + 1) * window.innerHeight);
      } else if ((window.pageYOffset / window.innerHeight) < this.page) {
        window.scrollTo(0, (this.page - 1) * window.innerHeight);
      }
    }
  }
}
