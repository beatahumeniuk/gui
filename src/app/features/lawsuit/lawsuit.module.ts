import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawsuitRoutingModule } from './lawsuit-routing.module';
import { CustomerLogoComponent } from './components/customer-logo/customer-logo.component';
import { LawsuitListComponent } from './pages/lawsuit-list/lawsuit-list.component';
import { LawsuitViewComponent } from './pages/lawsuit-view/lawsuit-view.component';
import { LawsuitEditComponent } from './pages/lawsuit-edit/lawsuit-edit.component';


@NgModule({
  declarations: [CustomerLogoComponent, LawsuitListComponent, LawsuitViewComponent, LawsuitEditComponent],
  imports: [
    CommonModule,
    LawsuitRoutingModule
  ]
})
export class LawsuitModule { }
