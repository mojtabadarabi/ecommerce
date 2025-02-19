import StarIcon from "@/icons/Star"

interface Props {
    title: string
    rate: number
    brand: string
    model: string
    color: string
}

export default function ProductBrief(props: Props) {
    const {brand,color,model,rate,title } = props

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <span className="bg-primary-500 text-white flex items-center gap-2 rounded-md p-1 w-max px-2"><StarIcon/>{rate}</span>
            <div className="flex  items-start">
                <span className="text-gray flex items-center gap-2 text-xl w-1/2">
                    <span className="w-[11px] h-[11px] rounded-full bg-gray block"/>
                    Brand
                </span>
                <h6 className="text-xl w-1/2">{brand}</h6>
            </div>
            <div className="flex ">
                <span className="text-gray flex items-center gap-2 text-xl w-1/2">
                    <span className="w-[11px] h-[11px] rounded-full bg-gray block"/>
                    Model Name
                </span>
                <h6 className="text-xl w-1/2">{model}</h6>
            </div>
            <div className="flex ">
                <span className="text-gray flex items-center gap-2 text-xl w-1/2">
                    <span className="w-[11px] h-[11px] rounded-full bg-gray block"/>
                    Color
                </span>
                <h6 className="text-xl w-1/2">{color}</h6>
            </div>
        </div>
    )
}
