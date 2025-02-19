'use client'
import { useMemo, useState } from 'react'
import ProductInfo from './ProductInfo'

export default function ProductDescribeTab() {
    const [tab, setTab] = useState<number>(0)

    const getTabContent = useMemo(() => {
        if (tab === 0) return <ProductInfo />
        if (tab === 1) return <h1 className='text-2xl font-medium my-6'>Similar Products</h1>
        if (tab === 2) return <h1 className='text-2xl font-medium my-6'>Comments</h1>
    }, [tab])

    return (
        <div className='min-h-[300px]'>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <TabItem isActive={tab === 0} onClick={() => setTab(0)} label={'Technical Details'} />
                    <TabItem isActive={tab === 1} onClick={() => setTab(1)} label={'Similar Products'} />
                    <TabItem isActive={tab === 2} onClick={() => setTab(2)} label={'Comments'} />
                </ul>
            </div>
            {getTabContent}
        </div>
    )
}

const TabItem = ({ isActive, label, onClick }: { isActive: boolean, label: string, onClick: () => void }) => {
    return <span
        onClick={onClick}
        className={`inline-block p-3 cursor-pointer border-b-2 transition ease-in-out duration-100  rounded-t-lg   active
            ${isActive ? 'text-primary border-primary' : 'text-black border-transparent'}
        `}>
        {label}
    </span>
}