'use client'

import { ProductType } from "@/types/products"
import { useMemo } from "react"
import ProductCard from "./ProductCard"

export default function ProductsMapper({products}:{products:ProductType[]}) {
    const getProductMemorize = useMemo(() => {
        return products.map((product: ProductType) => <ProductCard key={product.id} product={product} />)
    }, [products])
    return getProductMemorize
}
