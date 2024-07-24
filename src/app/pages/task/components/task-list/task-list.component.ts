import {Component, OnInit} from '@angular/core';
import {TaskFeaturesService} from "../../../../api/services/task-features.service";
import {ToastrService} from "ngx-toastr";
import {PageTaskDto} from "../../../../api/models/page-task-dto";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  public state: 'archived' | 'active' = 'active';
  public tasks: PageTaskDto | undefined;
  public loading: boolean = false;
  public currentPage: number = 1;
  public pageSize: number = 10;

  constructor(
    private service: TaskFeaturesService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getTasks('active');
  }

  public getTasks(state: 'archived' | 'active'): void {
    this.state = state;
    this.loading = true;
    this.pageSize = 10;
    this.currentPage = 1;

    switch (state) {
      case 'active':
        this.service.getTasks({page: this.currentPage, size: this.pageSize})
          .subscribe({
            next: (tasks) => {
              this.tasks = tasks;
              this.loading = false;
              this.toastr.success('Task request has just completed successfully', 'Task Success');
            },
            error: (error) => {
              console.error(error);
              this.loading = false;
              this.toastr.error('Task request went wrong, please contact the admin', 'Task Error');
            }
          })
        break;
      case 'archived':
        this.service.getArchivedTasks({page: this.currentPage, size: this.pageSize})
          .subscribe({
            next: (tasks) => {
              this.tasks = tasks;
              this.loading = false;
              this.toastr.success('Task request has just completed successfully', 'Task Success');
            },
            error: (error) => {
              console.error(error);
              this.loading = false;
              this.toastr.error('Task request went wrong, please contact the admin', 'Task Error');
            }
          })
        break
    }
  }
}
