import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  ageLabel = 'How old are you?';
  identityLabel = 'How do you identify yourself?';
  interactionLabel = 'How do you interact with Twitter';

  constructor() { }

  ngOnInit() {
  }

}
