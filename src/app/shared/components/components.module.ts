import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import {LogoComponent} from './logo/logo.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    UploadComponent,
    LogoComponent,
    InputComponent,
    ListComponent,
    ButtonComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    LogoComponent,
    UploadComponent
  ]
})
export class ComponentsModule { }
