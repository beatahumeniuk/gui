import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {DashboardModule} from './features/dashboard/dashboard.module';
import {LawsuitModule} from './features/lawsuit/lawsuit.module';
import {LoginModule} from './features/login/login.module';
import {SettingsModule} from './features/settings/settings.module';
import {TaskModule} from './features/task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    LawsuitModule,
    LoginModule,
    SettingsModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
