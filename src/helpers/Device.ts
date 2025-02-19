import { headers } from "next/headers"
import { userAgent } from "next/server"

export async function getIsDeviceMobile() {
    const { device } = userAgent({ headers: await headers() })
    
    return device.type === 'mobile'
}