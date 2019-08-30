import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPageComponent }  from './custom-page.component';
import { rowService } from './custom-page.service';

@NgModule({
  declarations: [ CustomPageComponent ],
  providers:    [ rowService ],
  bootstrap:    [ CustomPageComponent ],
  imports: [CommonModule]
})
export class CustomPageModule { }
