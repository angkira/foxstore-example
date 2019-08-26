import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomTableModule } from './modules/random-table/random-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RandomTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
