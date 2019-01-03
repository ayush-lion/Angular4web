import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions} from '@angular/http';
import { Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http ) { }
 
  finddiet(){
    return this.http.get('http://localhost:8080/user/fanboard').map(
    (response) => response.json(), 
    )
  }
}