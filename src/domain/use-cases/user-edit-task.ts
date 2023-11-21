import { Task } from '../entities/task'

interface UserEditTaskCaseRequest {
  userId: string
  taskId: string
  title?: string
  description?: string
}

export class UserEditTaskCase {
//   private tasks: Task[]

//   constructor(tasks: Task[]) {
//     this.tasks = tasks
//   }

//   execute({ userId, taskId, title, description }: UserEditTaskCaseRequest) {
//     const taskToEdit = this.tasks.find((task) => task.id === taskId)

//     if (!taskToEdit) {
//       throw new Error('Tarefa não encontrada')
//     }

//     taskToEdit.editTask(userId, taskId, title, description)

//     return taskToEdit
//   }
}
