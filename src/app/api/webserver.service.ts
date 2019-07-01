import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';


const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

const headersMultipart = new HttpHeaders().set(
    'Content-Type',
    'multipart/form-data'
);

const API_URL = 'http://localhost/crystalapi/';

@Injectable({
  providedIn: 'root'
})

export class WebserverService {
  data;

  constructor(private http: HttpClient) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  /**
   * Get url from webservice
   */
  public getPages() {
    return this.http.get(API_URL).subscribe(
        data => console.log(data),
        err => console.error(err),
        () => console.log('done loading foods')
    );
  }
}
