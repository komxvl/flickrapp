import { Component, OnInit } from '@angular/core';
import {GetImageInfoService} from "../services/get-image-info.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-current-image',
  templateUrl: './current-image.component.html',
  styleUrls: ['./current-image.component.css']
})
export class CurrentImageComponent implements OnInit {

  imageId;
  imageResponse;
  constructor(private _getImageInfoService:GetImageInfoService,
              private activateRoute: ActivatedRoute,
              private location:Location) { }

  ngOnInit() {
    this.imageId = this.activateRoute.params;
    this._getImageInfoService.getInfoImage(this.imageId.value.id).subscribe((data) =>{
      this.imageResponse = data;
      console.log("image/:id api",data);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
