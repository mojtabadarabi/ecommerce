import { NextRequest, NextResponse } from "next/server";
import { getIsDeviceMobile } from "./helpers/Device";
import { COOKIES_KEYS } from "./statics/cookies";

export const middleware = async(req: NextRequest) => {

    const deviceTypeCookie = req.cookies.get(COOKIES_KEYS.isMobile)

    const response = NextResponse.next()

    if (!deviceTypeCookie) {
        const deviceType = await getIsDeviceMobile()
        response.cookies.set({
            name: COOKIES_KEYS.isMobile,
            value: String(deviceType)
        })
    }
    return response
}   