import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GetImageInfoService {

  constructor(private http:HttpClient) { }
  getInfoImage(idImage) {
    return this.http.get('http://localhost:8080/image/'+idImage);
  }
}
