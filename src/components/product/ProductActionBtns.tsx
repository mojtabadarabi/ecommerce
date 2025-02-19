'use client'
import { addProductToCard } from "@/api/products"
import useApiCall from "@/hooks/useApiCall"
import DiscountIcon from "@/icons/Discount"
import Spinner from "@/icons/Spinner"
import { SingleProductType } from "@/types/products"
import Link from "next/link"

interface Props {
    price: number
    discount: number
    product: SingleProductType
}

export default function ProductActionBtns(props: Props) {
    const { price, discount, product } = props
    const [addToCardApi, { isLoading }] = useApiCall({
        apiCall: () => addProductToCard({
            title: product.title
        })
    })

    return (
        <div className='flex flex-col gap-4'>
            <div className="w-full flex justify-between">
                <span className="text-xl font-semibold">$ {price}</span>
                <span className="text-secondary font-semibold text-xl flex items-center gap-2"><DiscountIcon /> - {discount}%</span>
            </div>
            <div className="flex flex-col gap-4">
                <Link href={'/buy'} className="text-md p-2 text-center bg-primary rounded-md text-white">Buy now</Link>
                <button onClick={addToCardApi} className="text-md flex items-center justify-center p-2 text-center border border-primary text-primary rounded-md">
                    {isLoading&&isLoading.loadingFor==='api_call'?(
                        <Spinner size={25}/>
                    ):'Add to card'}
                </button>
            </div>
        </div>
    )
}
