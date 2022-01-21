import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskViewComponent} from './pages/task-view/task-view.component';
import {TaskListComponent} from './pages/task-list/task-list.component';
import {TaskEditComponent} from './pages/task-edit/task-edit.component';


const routes: Routes = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: ':id',
    component: TaskViewComponent
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
