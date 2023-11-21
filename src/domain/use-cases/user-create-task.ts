import { User } from '../entities/user'
import { Task } from '../entities/task'

interface UserCreateTaskCaseRequest {
  userId: string
  title: string
  description: string
}

export class UserCreateTaskCase {
//   private users: User[]

//   constructor(users: User[]) {
//     this.users = users
//   }

//   execute({ userId, title, description }: UserCreateTaskCaseRequest) {
//     const taskCreated = new Task(userId, title, description)

//     const user = this.getUserById(userId)
//     if (user) {
//       user.tasks.push(taskCreated)
//     } else {
//       throw new Error('Usuário não encontrado')
//     }

//     return taskCreated
//   }

//   private getUserById(id: string) {
//     const foundUser = this.users.find(user => user.id === id)
//     return foundUser || null
//   }
}
