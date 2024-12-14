// src/providers/ProductProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: Error | null;
  addProduct: (product: Product) => void;  // Changed return type to void and added parameter
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: false,
  error: null,
  addProduct: () => {},  // Updated to match interface
}); 

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {

  const INITIAL_PRODUCT_STATE: Product[] = [{
    id: 1,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 2,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 3,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 4,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 5,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 6,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 7,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 8,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 9,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },{
    id: 10,
    name: "Product Name",
    description: "boy, is this a product",
    price: 2.00, 
    imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  }];


  const [productList, setProductList] = useState(INITIAL_PRODUCT_STATE);

  return (
    <ProductContext.Provider
      value={{
        products: productList, 
        loading: false,
        error: null,
        addProduct: (product: Product) => {
          setProductList([product, ...productList]);
        },
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
