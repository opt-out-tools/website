import {AfterViewInit, Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';
@Directive({
  selector: '[appScroller]'
})
export class ScrollerDirective implements AfterViewInit {
  private scrolling: boolean;
  private page: number;

  constructor(private router: Router) {
    this.scrolling = false;
    this.page = -1;
  }

  ngAfterViewInit() {
    this.scrolling = false;
    this.page = -1;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
  @HostListener('window:scroll')
  @HostListener('dragstart')
  onScroll() {
    if ((this.router.url === '/about') && (this.page === 2) && (window.pageYOffset / window.innerHeight > 2)) {
    console.log(this.router.url, window.pageYOffset, window.innerHeight);
    } else {
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
}
