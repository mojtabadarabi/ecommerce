import { getAllCategories } from "@/api/category"
import { getAllProducts } from "@/api/products"
import Filters from "@/components/Filters"
import MobileFilters from "@/components/filters/MobileFilters"
import Pagination from "@/components/Pgination"
import ProductsMapper from "@/components/products/ProductsMapper"
import { getUniqueParams } from "@/helpers"



export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const solvedSearchParams = await searchParams
    const category = solvedSearchParams?.category
    const page = solvedSearchParams?.page || '1'

    const products = await getAllProducts({
        category: category ? getUniqueParams(category) : null,
        page: page ? getUniqueParams(page) : null,
    })

    const categories = await getAllCategories()

    return (
        <section className="flex flex-col gap-5">
            <MobileFilters categories={categories} category={category ? getUniqueParams(category) : null} />
            <div className="flex gap-8">
                <div className="flex-[2] md:block hidden">
                    <Filters
                        filter={category ? getUniqueParams(category) : null}
                        filters={[
                            {
                                label: 'Category',
                                items: categories
                            },
                        ]}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2 flex-[10]">
                    <ProductsMapper products={products} />
                </div>
            </div>
            <Pagination />
        </section>
    );
}