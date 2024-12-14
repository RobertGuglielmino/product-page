'use client';

import { Image} from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard.tsx";
import { useProductContext } from "@/providers/ProductProvider.tsx";
import ProductFocus from "./components/ProductCard/ProductFocus.tsx";
// import 'tailwindcss/tailwind.css';


export default function Home(this: any) {
  const { products } = useProductContext();

  const [focusedCard, setFocusedCard] = useState(0);

  useEffect(() => {

  }, [])


  function addToCart(id: any, amount: any) {
    //api call doesnt work here
    return console.log("this api does not work!! if it did work you would see a product id of " + id + " at the low price of " + amount);
  }

  let productCardList = products.map((product, index) => {
    let cardPackage = {
      id: product.id,
      image: product.imageUrl,
      productName: product.name,
      description: product.description,
      price: product.price,
      addToCart: (itemCount: any) => addToCart(product.id, itemCount),
      focusCard: () => setFocusedCard(product.id)
    }

    return <ProductCard className="flex" key={cardPackage.image} {...cardPackage} />
  })

  
  let productFocusList = products.map((product, index) => {
    let cardPackage = {
      id: product.id,
      image: product.imageUrl,
      productName: product.name,
      description: product.description,
      price: product.price,
      addToCart: (itemCount: any) => addToCart(product.id, itemCount)
    }

    return <ProductFocus key={cardPackage.image} {...cardPackage} />
  })
  
  return (
    <div>
      {/* would bring these focusedCard booleans into a Header component */}
      {focusedCard == 0 && (
        <div className="row-span-1">
          <Image src={products[0].imageUrl} />
        </div>
      )}
      {focusedCard != 0 && (
        <div className="row-span-1">
          {productFocusList[focusedCard]}
        </div>
      )}
      {focusedCard != 0 && (
        <div className="row-span-1">
          <h2>Similar Items</h2>
        </div>
      )}
      <div className="grid portrait:grid-cols-3 landscape:grid-cols-5 gap-16">
            {productCardList}
      </div>
    </div>
  );
}
