import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KtdRowHeightFitComponent} from './row-height-fit.component';

const routes: Routes = [{component: KtdRowHeightFitComponent, path: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RowHeightFitRoutingModule { }
