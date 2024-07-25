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
  public currentPage: number = 0;
  public pageSize: number = 5;

  constructor(
    private service: TaskFeaturesService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.requestActiveTasks();
  }

  public onNextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.getTasks();
  }

  public onPreviousPage(): void {
    this.currentPage = this.currentPage - 1;
    this.getTasks();
  }

  public requestArchivedTasks(): void {
    this.currentPage = 0;
    this.state = 'archived';
    this.getTasks();
  }

  public requestActiveTasks(): void {
    this.currentPage = 0;
    this.state = 'active';
    this.getTasks();
  }

  public getTasks(): void {
    this.loading = true;

    switch (this.state) {
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

  onArchivedTask(id: number | undefined) {
    if (!id) return
    this.service.archiveTask({id: id}).subscribe({
      next: () => {
        this.toastr.success('Task has been archived successfully', 'Task Success');
        this.requestActiveTasks();
      },
      error: (error) => {
        console.error(error);
        this.toastr.error('Task archiving went wrong, please contact the admin', 'Task Error');
      }
    });

  }
}


