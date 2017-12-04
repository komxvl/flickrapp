import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {GetInfoService} from "./services/get-info.service";
import {RouterModule,Routes} from "@angular/router";
import { AuthComponentComponent } from './auth-component/auth-component/auth-component.component';
import { UserListComponent } from './user-list/user-list.component';
import {GetUserAlbumsService} from "./services/get-user-albums.service";
import { AlbumComponentComponent } from './album-component/album-component.component';
import {GetImagesService} from "./services/get-images.service";
import { CurrentImageComponent } from './current-image/current-image.component';
import {GetImageInfoService} from "./services/get-image-info.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipDirective} from "ng2-tooltip-directive/components";

const appRoutes: Routes =[
  { path: '', redirectTo: '/main' ,  pathMatch: 'full'},
  { path: 'main', component: AuthComponentComponent},
  { path: 'list-albums', component: UserListComponent},
  { path: 'album/:id', component: AlbumComponentComponent},
  { path: 'image/:id', component: CurrentImageComponent}
];

@NgModule({
  declarations: [ 
    AppComponent,
    AuthComponentComponent,
    UserListComponent,
    AlbumComponentComponent,
    CurrentImageComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [GetInfoService,GetUserAlbumsService,GetImagesService,GetImageInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
