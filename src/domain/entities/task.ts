import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface TaskProps {
    userId: UniqueEntityId
    slug: Slug
    name: string
    description: string
    createdAt: Date 
    updatedAt: Date
    completedAt?: Date
}

export class Task extends Entity <TaskProps>{

    // editTask(userId: string, id: string, title?: string, description?: string) {
    //     if(this.userId == userId){
    //     // if(this.id == id){
    //         if(title){
    //             this.title = title
    //             this.updated_at = new Date().toISOString()
    //         }

    //         if(description){
    //             this.description = description
    //             this.updated_at = new Date().toISOString()
    //         }
    //     // }
    // }
    // }

    // completeTask(userId: string, id: string) {
    //     if(this.userId == userId){
    //     // if(this.id == id){
    //         this.updated_at = new Date().toISOString()
    //         this.completed_at = new Date().toISOString()
    //     // }
    // }
    // }
}