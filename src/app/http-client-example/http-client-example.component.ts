import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Customer } from './customer';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.css']
})
export class HttpClientExampleComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public result: any;

  ngOnInit() {
  }

  getCustomer() {
    this.http.get<Customer>('/data/customer1.json', {
      params: new HttpParams().set('id', '3').append('par1', 'xxx').append('par1', 'yyy')
    }).subscribe(
      (data: Customer) => {
          this.result = data;
        },
      (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      );
  }
}
