import { Component, OnInit } from '@angular/core';
import {GetUserAlbumsService} from "../services/get-user-albums.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private _getUserAlbumsService:GetUserAlbumsService) {
  }


  albumsResponse;
  userAlbums;
  ngOnInit() {
    this._getUserAlbumsService.getUserAlbums().subscribe((data) => {
      console.log("list-albums api:", data);
      if (data["stat"]) {
        console.log("good");
        this.albumsResponse = data;
        this.userAlbums = data["photosets"].photoset;
        console.log(this.userAlbums);
      }
      else{
        console.log("Error");
      }
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    })
  }
}
