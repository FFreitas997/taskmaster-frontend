import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import {TaskRoutingModule} from "./task-routing.module";
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskEditComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
