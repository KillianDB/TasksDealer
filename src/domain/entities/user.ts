import { Entity } from "../../core/entities/entity"
import { Task } from "../entities/task"
import { Slug } from "./value-objects/slug"

interface UserProps {
    slug: Slug
    name: string
    email: string
    password: string
    tasks: Task[]

}

export class User extends Entity <UserProps> {

    get name() {
        return this.props.name
    }

    get email() {
        return this.props.email
    }

    get tasks() {
        return this.props.tasks
    }

    // public getUserById(id: string) {
    //     if(id == this.id) {
    //         return this
    //     }else{
    //         return "Usuário não encontrado"
    //     }

    // }
}