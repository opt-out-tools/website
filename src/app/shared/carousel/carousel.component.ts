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
    {
      title: 'Amnesty International',
      text: 'Online abuse has a silencing or censoring effect on women with more than 3/4 (76%) of women across the eight countries who ' +
        'had experienced abuse or harassment on social media making some changes to the way they use social media platforms as a result.',
    },
    {
      title: 'Amnesty International',
      text: 'Of the women polled who have experienced online abuse or harassment: one-third (36%) felt their physical safety had been ' +
        'threatened; \tmore than half (55%) suffered stress, anxiety or panic attacks; three out of five (61%) had trouble sleeping ' +
        'well; two-thirds (67%) felt apprehensive when thinking about using social media; and one in five (20%) felt the online abuse ' +
        'threatened their job prospects.'
    },
    {
      title: 'PEW Research Center',
      text: 'More than a quarter of Americans have chosen to not post something online after seeing harassment of others'
    },
    {
      title: 'Jessica Valenti',
      text: 'I think Twitter is the worst of the social media platforms, just because of the quickened and masked flow [of abuse] that ' +
        'happens. The content feels pretty similar across the platforms but the sheer volume of it on Twitter is what’s different.'
    },
    {
      title: 'Amnesty International',
      text: 'The violence and abuse many women experience on Twitter has a detrimental effect on their right to express themselves ' +
        'equally, freely and without fear. Instead of strengthening women’s voices, the violence and abuse many women experience on the ' +
        'platform leads women to self-censor what they post, limit their interactions, and even drives women off Twitter completely.'
    },
    {
      title: 'Data & Society',
      text: 'Young people, women, and lesbian, gay, and bisexual (LGB) Americans are more likely to experience online harassment and ' +
        'more likely to self-censor online postings over concerns about attracting harassment.'
    },
    {
      title: 'UN Special Rapporteur on VAW',
      text: 'It’s “important to acknowledge that the Internet is being used in a broader environment of widespread and systemic ' +
        'structural discrimination and gender-based violence against women and girls, which frame their access to and use of the ' +
        'Internet and other ICT.'
    }

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
