import {Component, NgModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';


/*@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

@NgModule({
  imports: [  HttpClientXsrfModule.withOptions({
    cookieName: 'csrftoken',
    headerName: 'X-CSRFToken'
  })]
})*/
export class ReportComponent {

  private headers = new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }
  formData = {
    urls: undefined,
    submission: undefined
  };

  stepForm = [
    {
      subtitle: 'Before getting started, we need to ask you some questions to make sure we understand what’s going on.',
      title: 'Are you submitting an incident you have experienced yourself? If so click yes, otherwise click no',
    },
    {
      title: 'Is the incident part of a larger attack? If so click yes, otherwise click no',
    },
    {
      title: 'Copy and paste the URLs of the comments that you consider harassing.',
       // data: {
       // urls: this.formData.urls
       // }
    },
    {
      title: 'Would you like to tell us more about your experience?',
    },
    {
      title: 'Now we need to know a little about you. This is so our models can best understand who is suffering what meaning we can ' +
        'protect people better',
      data: {
      }
    }
  ];

  starStep = 1;

  setFormData(formData) {
    this.formData = {
      ...this.formData,
      ...formData
    };
  }
  submitAction(formData) {
    this.setFormData(formData);
    if (this.formData.hasOwnProperty('urls')) {
      if (this.formData.urls !== undefined) {
      this.formData.urls = this.formData.urls.split(',').map(str => str.trim());
      }
    }
    this.http.post('https://api.optoutools.com/submit_urls' , this.formData
    , { headers: this.headers, withCredentials: true} )
      .subscribe(  (data: Response) => {
        // tslint:disable-next-line:align
        this.formData.submission = (data as any).submission_id; return true; }, error => { console.log('Oops', error); return false; });
  }
  finishAction(formData) {
    this.setFormData(formData);
    console.log('test', this.formData);
    this.http.post('https://api.optoutools.com/submit_further_details' , this.formData
    , { headers: this.headers, withCredentials: true} )
      .subscribe(  (data: Response) => {
        if (data.status === 201) {
          return [console.log(data)];
        } else if (data.status === 200) {
          return [{ status: data.status, json: data }];
        }
      }, (data: Response) => {
          return [console.log(data)];
      });
  }
}
