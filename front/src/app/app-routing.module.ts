import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataAddComponent } from './modules/data-add/data-add.component';
import { DataEditComponent } from './modules/data-edit/data-edit.component';
import { DataGetComponent } from './modules/data-get/data-get.component';

const routes: Routes = [
  {
    path: 'parcours/create',
    component: DataAddComponent
  },
  {
    path: 'parcours/edit/:id',
    component: DataEditComponent
  },
  {
    path: 'parcours',
    component: DataGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
