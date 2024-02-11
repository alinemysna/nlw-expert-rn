import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";
import Product from "@/app/product/[id]";


export function add(products: ProductCartProps[], newProduct: ProductProps) {
    const existingProduct =products.find(({ id }) => newProduct.id === id)

    if(existingProduct){
        return products.map((product) => 
        product.id === existingProduct.id 
        ? { ...product, quantity: product.quantity + 1 }
        : product
        )
    }

    return [ ...products, { ...newProduct, quantity: 1}]
}