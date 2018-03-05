import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewListComponent } from '../new-list/new-list.component';
import { TopListComponent } from '../top-list/top-list.component';

@NgModule({
  declarations: [ DashboardComponent, NewListComponent, TopListComponent ],
  exports: [ DashboardComponent ],
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
