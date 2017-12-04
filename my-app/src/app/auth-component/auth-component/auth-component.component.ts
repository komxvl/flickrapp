import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {GetInfoService} from "../../services/get-info.service";

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  constructor(private _getInfoService:GetInfoService,
              private http:HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.getRequestToken();
  }


  requestToken = null;
  flickrUrl = null;
    userInfo;
  getRequestToken() {
    this._getInfoService.getRequestToken().subscribe((data) => {
          console.log("getRequestToken api:", data);
          /*this.requestToken = data["oauth_token"];
           console.log("requestToken", this.requestToken);
           = 'https://www.flickr.com/services/oauth/authorize?perms=delete&oauth_token='+this.requestToken;*/
          this.flickrUrl = data["link"];
        this.getUserInfo();
        },
        (err) => {
          console.log("error occured.",err);
        });
  }

  getUserInfo() {
    return this.http.get('http://localhost:8080/getUserInfo').subscribe((data) => {
          console.log("getUserInfo api:", data);
        this.userInfo = data;
        /*  this.goLk();*/},
        (err) => {
          console.log("error occured.",err);
        })
  }

    goUserListAlbums(){
    this.router.navigate(['list-albums']);
  }

}
