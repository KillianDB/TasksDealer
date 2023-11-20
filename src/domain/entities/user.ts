import { randomUUID } from "crypto"

export class User{
    public id: string
    public name: string
    public email: string
    private password: string
    public tasks: any

    constructor(id: string, name: string,email: string, password: string, tasks: any) {
        this.id = id ?? randomUUID()
        this.name = name
        this.email = email
        this.password = password
        this.tasks = []
    }
}