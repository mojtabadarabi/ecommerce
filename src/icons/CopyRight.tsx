import { SvgIcon } from "@/types/icon"
import tailwindConfig from 'R/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

export default function CopyRightIcon(props: SvgIcon) {
    const defaultColor = resolveConfig(tailwindConfig).theme.colors.gray[300]

    const { color = defaultColor, size = 25 } = props

    return (
        <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 6.48 6.98 2 12.5 2C18.02 2 22.5 6.48 22.5 12C22.5 17.52 18.02 22 12.5 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.3802 15C14.6702 15.62 13.7502 16 12.7402 16C10.5302 16 8.74023 14.21 8.74023 12C8.74023 9.79 10.5302 8 12.7402 8C13.7502 8 14.6702 8.38 15.3802 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
