import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import {ComponentsModule} from './components/components.module';
import {AuthModule} from './auth/auth.module';



@NgModule({
  declarations: [],
  exports: [
    ComponentsModule,
    MaterialModule,
    AuthModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    AuthModule
  ]
})
export class SharedModule { }
