import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetImagesService} from "../services/get-images.service";

@Component({
  selector: 'app-album-component',
  templateUrl: './album-component.component.html',
  styleUrls: ['./album-component.component.css'],
})
export class AlbumComponentComponent implements OnInit {
  
  albumId;
  albumName;
  imageList;
  photo;
  constructor(private activateRoute: ActivatedRoute,
              private _getAlbumImage:GetImagesService) {
  }

  ngOnInit() {
    this.albumId = this.activateRoute.params;
    this._getAlbumImage.getAlbumImage(this.albumId.value.id).subscribe((data) =>{
      console.log("album/:id api",data);
      this.imageList = data;
      console.log("this.imageList",this.imageList);
      this.albumName = this.imageList.photoset.title;
      this.photo =  this.imageList.photoset.photo;
      console.log(this.photo);
    });
  }

}
