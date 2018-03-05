import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncComponent } from './sync.component';
import { SyncRoutingModule } from './sync-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    SyncRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports: [ SyncComponent ],
  declarations: [ SyncComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SyncModule { }
