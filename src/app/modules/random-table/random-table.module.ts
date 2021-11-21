import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EventerComponent } from './components/eventer/eventer.component';
import { FormComponent } from './components/form/form.component';
import { RandomTableComponent } from './components/random-table/random-table.component';
import { TableComponent } from './components/table/table.component';
import { StoreService } from './store.service';


@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    RandomTableComponent,
    EventerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [StoreService],
  exports: [RandomTableComponent, EventerComponent]
})
export class RandomTableModule { }
