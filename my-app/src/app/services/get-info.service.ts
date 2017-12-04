import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GetInfoService {

  constructor(private http:HttpClient) {
  }

  requestToken;

  getRequestToken() {  
    return this.http.get('http://localhost:8080/getToken');
  }

  
}
