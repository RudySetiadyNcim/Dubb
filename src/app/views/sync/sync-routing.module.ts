import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SyncComponent } from './sync.component';

const routes: Routes = [
  {
    path: '',
    component: SyncComponent,
    data: {
      title: 'Synchronize'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SyncRoutingModule { }
