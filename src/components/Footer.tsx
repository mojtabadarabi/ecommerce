import CopyRightIcon from '@/icons/CopyRight'
import Link from 'next/link'
import Container from './ui/Container'
import LocationIcon from '@/icons/Location'
import PhoneIcon from '@/icons/Phone'
import EmailIcon from '@/icons/Email'

export default function FooterDesktop() {
    return (
        <div className="bg-primary-900 mt-8 py-7">
            <Container className="text-gray-300 flex flex-col gap-10">
                <div className='flex items-center gap-10'>
                    <div className='flex flex-col gap-4 w-1/4 text-gray-400'>
                        <h2 className='text-xl text-white'>Company</h2>
                        <Link href="/" prefetch={false}>about us</Link>
                        <Link href="/" prefetch={false}>blog</Link>
                        <Link href="/" prefetch={false}>returns</Link>
                        <Link href="/" prefetch={false}>order status</Link>
                    </div>
                    <div className='flex flex-col gap-4 w-1/4 text-gray-400'>
                        <h2 className='text-xl text-white'>Info</h2>
                        <Link href="/" prefetch={false}>How it works?</Link>
                        <Link href="/" prefetch={false}>our promises</Link>
                        <Link href="/" prefetch={false}>FAQ</Link>
                    </div>
                    <div className='flex flex-col gap-4 flex-1 text-gray-400'>
                        <h2 className='text-xl text-white'>Contact us</h2>
                        <Link href="/" prefetch={false} className='flex items-center gap-2'><LocationIcon size={20}/> 123 Main Street, Anytown,USA</Link>
                        <Link href="/" prefetch={false} className='flex items-center gap-2'><PhoneIcon size={20}/> +1 (555) 123-4567</Link>
                        <Link href="/" prefetch={false} className='flex items-center gap-2'><EmailIcon size={20}/> TechHeimSupport@gmail.com</Link>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <h6 className=" flex items-center gap-2 text-sm">
                        <CopyRightIcon />
                        2023 Tech Heim.
                    </h6>
                    <div className='flex items-center gap-3 text-sm'>
                        <Link href="/" prefetch={false}>cookie settings</Link>
                        <Link href="/" prefetch={false}>Privacy Policy</Link>
                        <Link href="/" prefetch={false}>Terms and Conditions </Link>
                        <Link href="/" prefetch={false}>Imprint</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
