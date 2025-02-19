'use client'
import BurgerIcon from '@/icons/Burger'
import CardIcon from '@/icons/Card'
import UserIcon from '@/icons/User'
import Link from 'next/link'

export default function MobileHeader() {
    return (
        <header className='py-4 sticky top-0 left-0 z-[100] bg-white flex justify-between'>
            <button>
                <BurgerIcon />
            </button>
            <h1 className='text-xl font-bold text-primary'>Tech Heim</h1>
            <div className='flex items-center gap-5'>
                <Link href={'/card'} prefetch={false}><CardIcon /></Link>
                <Link href={'/profile'} prefetch={false}><UserIcon /></Link>
            </div>
        </header>
    )
}

