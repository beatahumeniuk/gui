import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserSettingsComponent} from './pages/user-settings/user-settings.component';
import {SystemSettingsComponent} from './pages/system-settings/system-settings.component';


const routes: Routes = [
  {
    path: '',
    component: SystemSettingsComponent
  },
  {
    path: 'user',
    component: UserSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
