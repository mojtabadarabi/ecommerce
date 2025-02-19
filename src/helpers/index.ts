import { ALL_PRODUCTS_COUNT, PRODUCTS_LIMIT } from "@/statics/products"

export const getUniqueParams = (queryParam: string | string[]): string => {
    return Array.isArray(queryParam) ? queryParam[0] : queryParam
}
export const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - ((price + discount) / 100)
}
export const getCountOfProductsPages = () => {
    return ALL_PRODUCTS_COUNT / PRODUCTS_LIMIT
}