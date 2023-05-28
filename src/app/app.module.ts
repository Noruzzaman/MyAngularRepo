import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { AddEditFurnitureComponent } from './furniture/add-edit-furniture/add-edit-furniture.component';
import { ShowFurnitureComponent } from './furniture/show-furniture/show-furniture.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FurnitureComponent,
    AddEditFurnitureComponent,
    ShowFurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
