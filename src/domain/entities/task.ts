import { randomUUID } from "crypto"

export class Tasks{
    public id: string
    public title: string
    public description: string
    public created_at: string
    public updated_at: string
    public completed_at: string

    constructor(id: string, title: string, description: string, created_at: string, updated_at: string, completed_at: string) {
        this.id = id ?? randomUUID()
        this.title = title
        this.description = description
        this.created_at = new Date().toISOString()
        this.updated_at = new Date().toISOString()
        this.completed_at = ''
    }
}