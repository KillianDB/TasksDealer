import { randomUUID } from "crypto"

export class UniqueEntityId {
    private value: string

    toString(){
        return this.value
    }

    //se tirar o ? de value para de dar error, mas a ideia é que seja facultativo
    constructor(value?: string) {
        this.value = value ?? randomUUID
    }
}