import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';


@NgModule({
  declarations: [TaskListComponent, TaskViewComponent, TaskEditComponent],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
