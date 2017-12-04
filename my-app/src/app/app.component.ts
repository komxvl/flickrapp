import { Component } from '@angular/core';
import {GetInfoService} from "./services/get-info.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private _getInfoService:GetInfoService,
              private http:HttpClient,
              private router: Router) {

  }
  

  /*requestToken = null;
  flickrUrl = null;
  getRequestToken() {
    this._getInfoService.getRequestToken().subscribe((data) => {
          console.log("getRequestToken api:", data);
          /!*this.requestToken = data["oauth_token"];
          console.log("requestToken", this.requestToken);
           = 'https://www.flickr.com/services/oauth/authorize?perms=delete&oauth_token='+this.requestToken;*!/
          this.flickrUrl = data["link"];
        },
        (err) => {
          console.log("error occured.",err);
        });
  }

    getUserInfo() {
        return this.http.get('http://localhost:8080/getUserInfo').subscribe((data) => {
            console.log("getUserInfo api:", data);
            this.goLk();},
            (err) => {
            console.log("error occured.",err);
        })
    }

    goLk(){
        this.router.navigate(['oauth']);
    }*/
}
