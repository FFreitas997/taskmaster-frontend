import {Component, OnInit} from '@angular/core';
import {TaskFeaturesService} from "../../../../api/services/task-features.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskDto} from "../../../../api/models/task-dto";
import {RequestTaskDto} from "../../../../api/models/request-task-dto";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {

  public loading: boolean = false;
  public editMode: boolean = false;
  public id: number | null = null;
  public taskForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.maxLength(500)),
    dueDate: new FormControl(null, Validators.required),
    priority: new FormControl('LOW', Validators.required),
    status: new FormControl('TODO', Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private service: TaskFeaturesService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.taskForm.controls['status'].disable()
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.service.getTaskById({id: this.id})
        .subscribe(task => (this.initForm(task)));
    });
  }

  onSubmit() {
    this.loading = true;
    const model: RequestTaskDto = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      dueDate: this.taskForm.value.dueDate,
      priority: this.taskForm.value.priority,
      status: this.taskForm.value.status
    }

    if (this.editMode) {
      this.service.updateTask({id: this.id || -1, body: model})
        .subscribe({
          next: () => {
            this.toastr.success('Task updated successfully');
            this.router.navigate(['task', 'list']).then()
            this.loading = false;
          },
          error: (error) => {
            this.toastr.error('Task update failed');
            console.error(error);
            this.loading = false;
          }
        });
    } else {
      model.status = 'TODO';
      this.service.createTask({body: model}).subscribe({
        next: () => {
          this.toastr.success('Task created successfully');
          this.router.navigate(['task', 'list']).then()
          this.loading = false;
        },
        error: (error) => {
          this.toastr.error('Task creation failed');
          console.error(error);
          this.loading = false;
        }
      });
    }
  }

  private initForm(task: TaskDto) {
    if (!this.editMode) return;

    this.taskForm = new FormGroup({
      title: new FormControl(task.title, Validators.required),
      description: new FormControl(task.description, Validators.maxLength(500)),
      dueDate: new FormControl(task.dueDate, Validators.required),
      priority: new FormControl(task.priority, Validators.required),
      status: new FormControl(task.status, Validators.required)
    });
  }

}
