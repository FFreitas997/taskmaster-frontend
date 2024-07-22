import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskComponent} from "./task.component";

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    title: 'Task Page',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule{}
