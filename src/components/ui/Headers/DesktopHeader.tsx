'use client'
import CardIcon from '@/icons/Card'
import SearchIcon from '@/icons/Search'
import UserIcon from '@/icons/User'
import NavLink from '../NavLink'
import Link from 'next/link'

export default function DesktopHeader() {
    return (
        <header className='py-10 sticky top-0 left-0 z-[100] bg-white flex justify-between'>
            <div className='invisible'/>
            <nav className='flex items-center justify-center gap-10'>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>Products</NavLink>
                <NavLink href={'/blog'}>Blog</NavLink>
                <NavLink href={'/faq'}>FAQ</NavLink>
                <NavLink href={'/contact-us'}>Contact us</NavLink>
            </nav>
            <div className='flex items-center gap-5'>
                <Link href={'/search'} prefetch={false}><SearchIcon/></Link>
                <Link href={'/card'} prefetch={false}><CardIcon/></Link>
                <Link href={'/profile'} prefetch={false}><UserIcon/></Link>
            </div>
        </header>
    )
}

