import SearchIcon from '@/icons/Search'
import tailwindConfig from 'R/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

export default function SearchField() {
    const grayColor = resolveConfig(tailwindConfig).theme.colors.gray.DEFAULT

    return (
        <div
            className='border-0 bg-[#EDEDED] overflow-hidden flex items-center gap-2 text-md w-full p-1 pe-3 rounded-md'
        >
            <input
                className='w-full bg-transparent p-3 h-full focus:outline-none'
                placeholder='What can we help you to find ?'
            />
            <SearchIcon color={grayColor} size={26}/>
        </div>
    )
}
