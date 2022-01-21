import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LawsuitListComponent} from '../lawsuit/pages/lawsuit-list/lawsuit-list.component';
import {UploadComponent} from './pages/upload/upload.component';


const routes: Routes = [
  {
    path: '',
    component: UploadComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
