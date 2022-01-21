import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SystemSettingsComponent } from './pages/system-settings/system-settings.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { PhotoComponent } from './components/photo/photo.component';


@NgModule({
  declarations: [SystemSettingsComponent, UserSettingsComponent, PhotoComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
