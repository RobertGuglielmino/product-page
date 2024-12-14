'use client';

import {Button, CardHeader, CardBody, CardFooter, Image, Card} from "@nextui-org/react";
import { useState } from "react";
import QuantitySelector from "../QuantitySelector.tsx";

export default function ProductCard(props: any) {

    const [itemQuantity, setItemQuantity] = useState(1);

    const quantitySelectorPackage = {
        itemQuantity,
        setItemQuantity
    }

    return (
        <>
            <Card >
                <CardHeader >
                    <Image
                        src={props.image}
                        alt="wow"
                    />
                </CardHeader>
                <CardBody>
                    <h1>
                        {props.productName}
                    </h1>
                    <div>
                        {props.description}
                    </div>
                    <Button onPress={() => props.focusCard()}>show product</Button>
                </CardBody>
                <CardFooter className="grid col-span-3 gap-2">
                    <div className="place-content-center">
                        {props.price}
                    </div>
                    <QuantitySelector {...quantitySelectorPackage}></QuantitySelector>
                    <Button onPress={() => props.addToCart(itemQuantity)}>Add to Cart</Button>
                </CardFooter>
            </Card>
        </>
    );
}