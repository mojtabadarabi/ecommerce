import { PRODUCTS_LIMIT } from "@/statics/products";
import { Fetch } from ".";
import toast from "react-hot-toast";

export const getAllProducts = async ({ category = null, page = '1' }: { category?: string | null, page: string | null }) => {
    try {
        let url = '/products'
        if (category) url += `/category?type=${category}`
        url += `${category ? '&' : '?'}limit=${PRODUCTS_LIMIT}&page=${page}`

        const response = await Fetch({
            url
        })
        const data = await response.json()
        return data.products
    } catch (error) {
        return error
    }
}
export const addProductToCard = async (products: { title: string }) => {
    try {
        const response = await Fetch({
            url: '/products',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(products)
        })
        toast.success('successfully added')
    } catch (error) {
        return error
    }
}