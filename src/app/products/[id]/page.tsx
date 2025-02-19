import ProductActionBtns from '@/components/product/ProductActionBtns'
import ProductBrief from '@/components/product/ProductBrief'
import ProductDescribeTab from '@/components/product/ProductDescribeTab'
import ProductImage from '@/components/product/ProductImage'
import { getUniqueParams } from '@/helpers'
import { SingleProductType } from '@/types/products'
import { notFound } from 'next/navigation'

const getProductById = async (productId: string) => {
  try {
    const response = await fetch('https://fakestoreapi.in/api/products/' + productId)
    const data = await response.json()
    return data.product
  } catch (error) {
    return error
  }
}

export default async function page({ params }: { params: Promise<{ id: string | string[] }> }) {
  const productId = (await params).id

  const product = await getProductById(getUniqueParams(productId)) as SingleProductType
  if(!product) return notFound()

  return (
    <section>
      <div className='flex xl:flex-row flex-col items-start justify-start gap-16'>
        <div className='md:w-[40vw] w-full h-[400px]'>
          <ProductImage image={product.image} alt={product.title} />
        </div>
        <div className=''>
          <ProductBrief
            brand={product.brand}
            color={product.color}
            model={product.model}
            rate={4.3}
            title={product.title} />
        </div>
        <div className='md:w-[20vw] w-full'>
          <ProductActionBtns price={product.price} discount={product.discount} product={product}/>
        </div>
      </div>
      <ProductDescribeTab/>
    </section>
  )
}
