'use client'
import FilterIcon from "@/icons/Filter";
import { useState } from "react";
import Filters from "../Filters";

export default function MobileFilters({ categories, category }: { categories: string[], category: string | null }) {
    const [isOpenFiltersModal, setIsOpenFiltersModal] = useState<boolean>(false)
    
    return <>
        <div
            className={`fixed inset-0 z-[1000] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity ${isOpenFiltersModal ? 'opacity-100' : 'opacity-0 hidden'} delay-150 duration-300`}
        >
            <div
                className="relative m-4 p-4 w-full h-full bg-white shadow-sm"
            >
                <Filters
                    filter={category}
                    filters={[
                        {
                            label: 'Category',
                            items: categories
                        },
                    ]}
                    onClickFitler={() => setIsOpenFiltersModal(false)}
                />
            </div>
        </div>
        <button className='flex items-center gap-2 md:hidden w-max' onClick={() => setIsOpenFiltersModal(true)}>
            <FilterIcon size={23} />
            <span className='text-xl'>Filters</span>
        </button>
    </>
}
