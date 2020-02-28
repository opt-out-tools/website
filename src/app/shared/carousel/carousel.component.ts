import {
  AfterViewInit,
  Component, Input,
} from '@angular/core';
import {style, transition, trigger, animate} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements AfterViewInit {

  carouselWrapperStyle = {};
  private currentSlide = 0;
  @Input() items = [
    {
      title: 'Laurie Penny',
      text: 'The hatred of women in public spaces online is reaching epidemic levels and it’s time to end the pretence that it’s either ' +
        'acceptable or inevitable'
    },
    {
      title: 'UN Special Rapporteur on VAW',
      text: 'Women human rights defenders, journalists and politicians are directly targeted, threatened, harassed or even killed for ' +
        'their work. They receive online threats, generally of a misogynistic nature, often sexualized and specifically gendered. The ' +
        'violent nature of these threats often leads to self-censorship.'
    },
    {
      title: 'Data & Society',
      text: '47% of internet users (aged 15 and older) have experienced online harassment or abuse, and 72% have witnessed it.'
    },
  ];

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.items.length - 1 : previous;
    // console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.items.length ? 0 : next;
    // console.log('next clicked, new current slide is: ', this.currentSlide);
  }

  ngAfterViewInit() {
  }

}
