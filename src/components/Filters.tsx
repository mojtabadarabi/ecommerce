'use client'
import { FilterType } from "@/types/products"
import { useRouter } from "next/navigation"
import DropDownSelect from "./ui/DropDownSelect"

interface Props {
    filters: FilterType[]
    filter: string | null
    onClickFitler?: () => void
}

export default function Filters(props: Props) {
    const { filter, filters, onClickFitler } = props

    const router = useRouter()

    const onClickClearFilter = () => {
        onClickFitler?.()
        router.push('/products')
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <span className="text-sm font-semibold">Filters</span>
                {filter && filter.trim() !== '' && <span className="text-sm text-primary cursor-pointer" onClick={onClickClearFilter}>Clear all</span>}
            </div>
            <div className="flex flex-col gap-8 ">
                {
                    filters.map((filter: FilterType, index: number) => (
                        <DropDownSelect items={filter.items} label={filter.label} key={index} onClickFitler={onClickFitler} />
                    ))
                }
            </div>
        </div>
    )
}
