'use client';

import {Button, Card, CardBody, Image} from "@nextui-org/react";
import QuantitySelector from "../QuantitySelector.tsx";
import { useState } from "react";

export default function ProductCard(props: any) {

    const [itemQuantity, setItemQuantity] = useState(1);

    const quantitySelectorPackage = {
        itemQuantity,
        setItemQuantity
    }
    
    return (
        <Card>
            <CardBody>
                <Image
                    src={props.image}
                    alt="wow"
                />
                <h1>
                    {props.productName}
                </h1>
                <div>
                    {props.description}
                </div>
                <div>
                    {props.price}
                </div>
                <QuantitySelector {...quantitySelectorPackage}></QuantitySelector>
                <Button onPress={() => props.addToCart()}>Add to Cart</Button>
            </CardBody>
        </Card>
    );
}