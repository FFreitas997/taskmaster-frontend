import {Component, OnInit} from '@angular/core';
import {TaskFeaturesService} from "../../../../api/services/task-features.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskDto} from "../../../../api/models/task-dto";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit {

  public loading = false;
  public loadingArchive = false;
  public id: number | undefined;
  public task: TaskDto | undefined;
  public comment: string | null = null;

  constructor(
    private service: TaskFeaturesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.getTaskById({id: this.id})
        .subscribe(task => (this.task = task))
    });
  }


  onArchive(): void {
    this.loadingArchive = true;
    this.service.archiveTask({id: this.id || -1}).subscribe({
      next: () => {
        this.toastr.success('Task has been archived successfully', 'Task Success');
        this.router.navigate(['task','list']).then();
        this.loadingArchive = false;
      },
      error: (error) => {
        console.error(error);
        this.toastr.error('Task archiving went wrong, please contact the admin', 'Task Error');
        this.loadingArchive = false;
      }
    });
  }

  onEdit(): void {
    this.router.navigate(['task', this.id, 'edit']).then();
  }

  onCreateComment(): void {
    this.loading = true;
    if (!this.comment) {
      this.toastr.error('Comment cannot be empty', 'Comment Error');
      return;
    }
    const submitComment = this.comment;
    this.comment = null;
    this.service.createTaskComment({id: this.id || -1, body: {comment: submitComment}})
      .subscribe({
        next: () => {
          this.toastr.success('Comment has been added successfully', 'Comment Success');
          this.loading = false;
          this.service.getTaskById({id: this.id || -1})
            .subscribe(task => (this.task = task))
        },
        error: (error) => {
          this.loading = false;
          console.error(error);
          this.toastr.error('Comment creation went wrong, please contact the admin', 'Comment Error');
        }
      })
  }
}
