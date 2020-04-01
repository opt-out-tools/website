import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('about1', { read: ElementRef }) about1: ElementRef;
  @ViewChild('about2', { read: ElementRef }) about2: ElementRef;
  @ViewChild('about3', { read: ElementRef }) about3: ElementRef;
}
