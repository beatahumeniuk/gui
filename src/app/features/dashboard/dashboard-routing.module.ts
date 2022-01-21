import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LawsuitListComponent} from '../lawsuit/pages/lawsuit-list/lawsuit-list.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
