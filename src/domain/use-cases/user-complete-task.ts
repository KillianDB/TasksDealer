import { Task } from '../entities/task'
import { User } from '../entities/user'

interface UserCompleteTaskCaseRequest {
  idUser: string
  userId: string
  taskId: string
}

export class UserCompleteTaskCase {
//   private tasks: Task[]
//   private users: User[]

//   constructor(tasks: Task[], users: User[]) {
//     this.tasks = tasks
//     this.users = users
//   }
  

//   execute({ userId, taskId }: UserCompleteTaskCaseRequest) {
//     // const taskToComplete = this.tasks.find((task) => task.id === taskId)
//     // const userTask = this.users.find((user) => user.id === userId)

// //     if(!userTask) {
// //         throw new Error('Usuário não encontrado')
// //     }
// //     if (!taskToComplete) {
// //       throw new Error('Tarefa não encontrada')
// //     }

// //     taskToComplete.completeTask(userId, taskId)

// //     return taskToComplete
// //   }
}
