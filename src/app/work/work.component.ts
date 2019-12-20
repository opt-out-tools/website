import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent {
  @ViewChild('work1', {read: ElementRef, static: false}) work1: ElementRef;
  @ViewChild('work2', {read: ElementRef, static: false}) work2: ElementRef;
  @ViewChild('work3', {read: ElementRef, static: false}) work3: ElementRef;
}
