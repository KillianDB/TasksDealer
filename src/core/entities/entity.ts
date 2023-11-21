import { randomUUID } from "crypto";
import { Slug } from "../../domain/entities/value-objects/slug";
import { UniqueEntityId } from "./unique-entity-id";

export class Entity<Props extends { name: string }> {
    private id: UniqueEntityId;
    protected slug: Slug;
    protected props: Props;

    get Id() {
        return this.id;
    }

    get Slug() {
        return this.slug;
    }

    constructor(props: Props, id?: string, slug?: string) {
        this.props = props;
        this.id = new UniqueEntityId(id)
        //analisar se slug é uma instancia não ta rolando
        //slug em Slug é string
        this.slug = slug ?? new Slug(props.name)
    }
}
