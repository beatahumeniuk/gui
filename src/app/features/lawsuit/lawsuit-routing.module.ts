import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/pages/login/login.component';
import {TaskListComponent} from '../task/pages/task-list/task-list.component';
import {LawsuitListComponent} from './pages/lawsuit-list/lawsuit-list.component';
import {LawsuitViewComponent} from './pages/lawsuit-view/lawsuit-view.component';
import {LawsuitEditComponent} from './pages/lawsuit-edit/lawsuit-edit.component';


const routes: Routes = [
  {
    path: '',
    component: LawsuitListComponent
  },
  {
    path: ':id',
    component: LawsuitViewComponent
  },
  {
    path: 'edit/:',
    component: LawsuitEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawsuitRoutingModule { }
