import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskComponent} from "./task.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {TaskDetailComponent} from "./components/task-detail/task-detail.component";
import {TaskEditComponent} from "./components/task-edit/task-edit.component";

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    title: 'Task Page',
    children: [
      {
        path: 'list',
        component: TaskListComponent
      },
      {
        path: 'new',
        component: TaskEditComponent
      },
      {
        path: ':id',
        component: TaskDetailComponent
      },
      {
        path: ':id/edit',
        component: TaskEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
