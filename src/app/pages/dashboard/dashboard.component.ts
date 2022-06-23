import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tasks: Task[] = [];
  public displayResponsive: boolean = false;
  public page: number = 0;
  public totalTask: number = 0;
  public taskForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
  });

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  /**
   * Metodo para cargar el listado de tareas
   */
  loadTasks(): void {
    this.taskService.getAllTask(this.page).subscribe(({total, tasks}) => {
      this.tasks = tasks;
      this.totalTask = total;
    });
  }

   /**
   * Metodo para crear una tarea
   */
  createTask(page: number = 0):void {
    this.taskService.createTask(this.taskForm.value).subscribe({
      next: (resp: any) => {
        this.displayResponsive = false;
        Swal.fire('Success', resp.message, 'success');
        this.loadTasks();
      },
      error: (e: any) => Swal.fire('Error', e.error.message, 'error')
    });
  }

  /**
   * Metodo correspondiente a la paginacion para avanzar/retroceder
   */
  changePage(value: number) {
    this.page += value;
    if (this.page < 0) this.page = 0;
    else if (this.page >= this.totalTask) this.page -= value

    this.loadTasks();
  }

  /**
   * Metodo para resolver una tarea
   */
  taskResolve(task: Task): void {
    this.taskService.updateTask(task).subscribe({
      next: (resp: any) => {
        this.displayResponsive = false;
        Swal.fire('Success', resp.message, 'success');
        this.loadTasks();
      },
      error: (e: any) => Swal.fire('Error', e.error.message, 'error')
    });
  }
}
