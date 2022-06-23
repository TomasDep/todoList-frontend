import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ITaskForm } from '../interfaces/task-form.interface';
import { Task } from '../models/task.model';
import { ILoadTasks } from '../interfaces/load-tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /**
   * Metodo para obtener el token
   */
  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  
  /**
   * Metodo para obtener los headers
   */
  get headers(): object {
    return { headers: { 'x-token': this.token, } };
  }

  /**
   * Metodo para consumir el endpoint que corresponde al listado de tareas
   */
  getAllTask(page: number): Observable<{ total: number, tasks: Task[] }> {
    return this.http.get<ILoadTasks>(`${ this.baseUrl }/tasks?page=${ page }`, this.headers)
                .pipe(
                  map(resp => {
                    const tasks = resp.tasks.map(
                      task => new Task(
                                    task.uid, 
                                    task.name, 
                                    task.state, 
                                    task.description, 
                                    task.user
                                  )
                    );
                    return {
                      total: resp.total,
                      tasks
                    }
                  })
                );
  }

  /**
   * Metodo para consumir el endpoint que corresponde a la creacion de una tarea
   */
  createTask(formData: ITaskForm): Observable<any> {
    return this.http.post(`${ this.baseUrl }/tasks`, formData, this.headers)
                .pipe(
                  map((resp: any) => resp)
                );
  }

  /**
   * Metodo para consumir el endpoint que corresponde a la actualizacion de una tarea
   */
  updateTask(task: Task): Observable<any> {
    task.state = true;
    return this.http.put(`${ this.baseUrl }/tasks/${ task.uid }`, task, this.headers)
                .pipe(
                  map((resp: any) => resp)
                );
  }
}
