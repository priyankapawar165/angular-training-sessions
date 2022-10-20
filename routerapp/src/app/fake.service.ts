import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {



  constructor(private http: HttpClient) { }


  getList():Observable<any> {

    return this.http.get<Observable <any>> ('https://jsonplaceholder.typicode.com/postsjj');
  }
  
}
