import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GetImagesService {

  constructor(private http:HttpClient) { }
  getAlbumImage(idAlbum) {
    return this.http.get('http://localhost:8080/album/'+idAlbum);
  }
}
