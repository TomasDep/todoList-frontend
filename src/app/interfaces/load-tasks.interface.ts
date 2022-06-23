import { Task } from "../models/task.model";

/**
 * Interfaz para la carga de tareas
 * @param total: number
 * @param tasks: Task[]
 */
export interface ILoadTasks {
  total: number;
  tasks: Task[];
}