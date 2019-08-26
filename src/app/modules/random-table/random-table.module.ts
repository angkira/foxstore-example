import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { RandomTableComponent } from './components/random-table/random-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    RandomTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RandomTableComponent]
})
export class RandomTableModule { }
