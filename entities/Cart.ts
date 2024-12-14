import {
    PrimaryKey,
    Entity,
    Property,
    ManyToOne,
    Collection,  
} from "@mikro-orm/core";
import { Product } from "./Product.js";
  
@Entity()
export class Cart {
    @PrimaryKey()
    id!: number;
  
    @ManyToOne()
    product = new Collection<Product>(this);

    @Property()
    quantity!: number;
}