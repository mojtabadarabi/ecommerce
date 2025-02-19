import { SvgIcon } from "@/types/icon"
import tailwindConfig from 'R/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

export default function RightArrowIcon(props: SvgIcon) {
    const defaultColor = resolveConfig(tailwindConfig).theme.colors.black

    const { color = defaultColor, size = 25 } = props

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7996 12C16.7996 12.7 16.5296 13.4 15.9996 13.93L9.47965 20.45C9.18965 20.74 8.70965 20.74 8.41965 20.45C8.12965 20.16 8.12965 19.68 8.41965 19.39L14.9396 12.87C15.4196 12.39 15.4196 11.61 14.9396 11.13L8.41965 4.60998C8.12965 4.31998 8.12965 3.83998 8.41965 3.54998C8.70965 3.25998 9.18965 3.25998 9.47965 3.54998L15.9996 10.07C16.5296 10.6 16.7996 11.3 16.7996 12Z" fill={color} />
        </svg>
    )
}
