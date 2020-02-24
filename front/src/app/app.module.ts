import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAddComponent } from './modules/data-add/data-add.component';
import { DataGetComponent } from './modules/data-get/data-get.component';
import { DataEditComponent } from './modules/data-edit/data-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataAddComponent,
    DataGetComponent,
    DataEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
