import { Fetch } from "."

export const getAllCategories = async () => {
    try {
        const response = await Fetch({ url: '/products/category' })
        const data = await response.json()
        return data.categories
    } catch (error) {
        return error
    }
}