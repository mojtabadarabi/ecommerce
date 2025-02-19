'use client'
import SelectIcon from "@/icons/Select"
import SelectFillIcon from "@/icons/SelectFill"
import TopArrowIcon from "@/icons/TopArrowIcon"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

interface Props {
    label: string
    items: string[]
    onClickFitler?: () => void
}

export default function DropDownSelect(props: Props) {
    const { label, items, onClickFitler } = props

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const rotuer = useRouter()

    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    const onClickFilterHandler = (item: string) => {
        onClickFitler?.()
        rotuer.push('/products?category=' + item)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                <h3 className="text-md ">{label}</h3>
                <span className={`${!isOpen && 'rotate-180'} transition ease-in-out duration-100`}>
                    <TopArrowIcon size={17} />
                </span>
            </div>
            <div className={`${!isOpen ? 'h-0' : 'h-max'} transition ease-in-out duration-100 overflow-hidden flex flex-col gap-2`}>
                {
                    items.map((item, index) => (
                        <div onClick={() => onClickFilterHandler(item)} key={index} className="flex items-center justify-start gap-2 cursor-pointer">
                            {category !== item ? <SelectIcon /> : <SelectFillIcon />}
                            <h6 key={index} className="text-md">{item}</h6>
                        </div>
                    ))
                }
            </div>
            <span className="h-[1px] w-full bg-gray-400" />
        </div>
    )
}
