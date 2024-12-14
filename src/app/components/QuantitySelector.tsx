'use client';

import {Button, Input} from "@nextui-org/react";

export default function QuantitySelector(props: any) {

    function decrementQuantity() {
        if (props.itemQuantity >= 0) {
            props.setItemQuantity(props.itemQuantity - 1);
        }
    }
    function setQuantity(value: number) {
        if (value >= 0) {
            props.setItemQuantity(value);
        }
    }
    function incrementQuantity() {
        props.setItemQuantity(props.itemQuantity + 1);
    }

    return (
        <div className="grid gap-2 grid-cols-3">
            <Button className="flex box-border" onPress={decrementQuantity}>-</Button>
            <Input className="flex box-border" type="text" value={props.itemQuantity} onChange={(e: { target: { value: string; }; }) => setQuantity( parseInt(e.target.value) || 0 )} />
            <Button className="flex box-border" onPress={incrementQuantity}>+</Button>
        </div>
    );
}