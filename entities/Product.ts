import {
    PrimaryKey,
    Entity,
    Property, types
} from "@mikro-orm/core";
  
@Entity()
export class Product {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    description!: string;

    @Property()
    price!: number;

    @Property()
    imageUrl!: string;
}