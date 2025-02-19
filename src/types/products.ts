export interface ProductType{
    id:number,
    title:string,
    price:number
    description:string
    category:string
    image:string
    rating:RateType
    discount:number
}

export interface RateType{
    rate:number
    count:number
}
export interface FilterType{
    label:string
    items:string[]
}
export interface SingleProductType{
    brand:string
    category:string
    color:string
    description:string
    discount:number
    id:number
    image:string
    model:string
    price:number
    title:string
}