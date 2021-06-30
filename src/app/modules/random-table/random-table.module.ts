import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { RandomTableComponent } from './components/random-table/random-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreService } from './store.service';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    RandomTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [StoreService],
  exports: [RandomTableComponent]
})
export class RandomTableModule { }
