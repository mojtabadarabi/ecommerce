'use client'

import { getCountOfProductsPages, getUniqueParams } from "@/helpers"
import RightArrowIcon from "@/icons/RightArrowIcon"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function Pgination() {

    const page = getUniqueParams(useSearchParams().get('page') || '1')
    const category = useSearchParams().get('category')

    const getAvailablePagination = useMemo(() => {
        const numericPage = Number(page)
        return [
            ...(numericPage > 1 ? [numericPage - 1] : []),
            numericPage,
            ...(numericPage < getCountOfProductsPages() ? [numericPage + 1, '...', getCountOfProductsPages()] : []),

        ]
    }, [page])


    return (
        <div className="mx-auto w-max my-8 flex items-center gap-6 text-xl">
            {
                Number(page) - 1 > 0 && (
                    <Link className="rotate-180" href={{ pathname: '/products', query: { page: Number(page) - 1, ...(category ? { category } : {}) } }}>
                        <RightArrowIcon />
                    </Link>
                )
            }
            {
                getAvailablePagination.map((num, index: number) => {
                    if (typeof num === 'string') {
                        return '...'
                    }
                    return <Link
                        href={{ pathname: '/products', query: { page: num, ...(category ? { category } : {}) } }}
                        className={`${page == String(num) ? 'text-primary border-b border-b-primary' : ''} px-3 `}
                        prefetch={false} key={index}>
                        {num}
                    </Link>
                })
            }
            {
                Number(page) < getCountOfProductsPages() && (
                    <Link href={{ pathname: '/products', query: { page: Number(page) + 1, ...(category ? { category } : {}) } }}>
                        <RightArrowIcon />
                    </Link>
                )
            }
        </div>
    )
}
