import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import {TaskRoutingModule} from "./task-routing.module";



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  providers: [],
  bootstrap: [TaskComponent]
})
export class TaskModule { }
