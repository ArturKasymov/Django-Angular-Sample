import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPageComponent }  from './custom-page.component';
import { rowService } from './custom-page.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ CustomPageComponent ],
  providers:    [ rowService ],
  bootstrap:    [ CustomPageComponent ],
  imports: [CommonModule, BrowserModule, HttpClientModule]
})
export class CustomPageModule { }
