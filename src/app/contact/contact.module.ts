//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { routes } from './app.router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRouterModule } from './contact-router.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ContactRouterModule
    
  ]
})
export class ContactModule { }