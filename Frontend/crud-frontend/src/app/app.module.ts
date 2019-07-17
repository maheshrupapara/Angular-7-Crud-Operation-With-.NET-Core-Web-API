import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CrudServices } from './shared/crud.service';
import { ToastrModule } from 'ngx-toastr';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudViewComponent } from './crud-view/crud-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudOperationsComponent,
    CrudListComponent,
    CrudViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CrudServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
