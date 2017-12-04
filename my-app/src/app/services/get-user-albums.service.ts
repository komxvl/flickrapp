import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GetUserAlbumsService {

  constructor(private http:HttpClient) { }

  getUserAlbums() {
    return this.http.get('http://localhost:8080/list-albums');
  }
}
