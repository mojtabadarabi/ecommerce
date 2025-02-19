import Image from 'next/image'

export default function ProductImage({ image, alt }: { image: string, alt: string }) {
    return (
        <div className='w-full h-full relative'>
            <Image src={image} alt={alt} fill className='object-contain' />
        </div>
    )
}
