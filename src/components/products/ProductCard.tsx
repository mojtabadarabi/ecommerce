import { calculateDiscountedPrice } from '@/helpers'
import StarIcon from '@/icons/Star'
import { ProductType } from '@/types/products'
import Image from 'next/image'
import Link from 'next/link'
import tailwindConfig from 'R/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

export default function ProductCard(props: { product: ProductType }) {
    const primaryColor = resolveConfig(tailwindConfig).theme.colors.primary[500]

    const { product } = props

    const { id, title, image, discount, price
    } = product

    return (
        <Link href={`products/${id}`} prefetch={false} className='relative border rounded-md shaodw-md shadow-1 hover:shadow-2 transition ease-in-out duration-100 delay-100'>
            <div className='relative md:h-[300px] h-[150px] w-[60%] mx-auto'>
                <Image src={image} alt={title} fill className='object-contain' />
            </div>
            <div className='h-[1px] my-1 w-[90%] mx-auto rounded-full' style={{background:'linear-gradient(90deg, rgba(68,68,68,0.1) 0%, rgba(16,16,16,0.7) 50%, rgba(68,68,68,0.1) 100%)'}}/>
            {
                discount && discount !== 0 && (
                    <span className='absolute top-6 left-0 rounded-tr-xl rounded-br-xl bg-secondary-100 text-secondary md:py-2 py-1 md:px-3 px-2'>-{discount}%</span>
                )
            }
            <div className='md:p-4 p-1 flex flex-col items-start justify-start'>
                <h1 className='truncate w-full mb-5 md:text-xl text- overflow-hidden'>{title}</h1>
                <div className='flex md:text-xl text-sm justify-between items-end w-full   '>
                    <div className='flex flex-col gap-2 justify-between '>
                        {
                            discount && discount !== 0 ? (
                                <>
                                    <span className='text-gray line-through'>${price}</span>
                                    <span>${calculateDiscountedPrice(price,discount)}</span>
                                </>
                            ) : (
                                <span>${price}</span>
                            )
                        }
                    </div>
                    <span className='text-primary-500 flex items-center gap-1'><StarIcon color={primaryColor} size={18}/>4.3</span>
                </div>
            </div>
        </Link>
    )
}
