import { COOKIES_KEYS } from '@/statics/cookies'
import { getCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

export default function useIsDeviceMobile() {
    const [isMobile, setIsMobile] = useState<String>('true')

    const getIsMobileByScreenSize = () => {
        if (window.innerWidth > 768) {
            return 'false'
        }
        return 'true'
    }

    const setIsMobileCookieByScreenSize = async () => {
        const isMobile = getIsMobileByScreenSize()
        const isMobileCookie = await getCookie(COOKIES_KEYS.isMobile)
        
        setIsMobile(isMobile)
        if (!isMobileCookie || isMobileCookie !== isMobile) {
            setCookie(COOKIES_KEYS.isMobile, isMobile)
        }
    }

    useEffect(() => {
        setIsMobileCookieByScreenSize()
        window.addEventListener('resize', () => {
            setIsMobileCookieByScreenSize()
        })
        return () => {
            window.removeEventListener('resize', () => setIsMobileCookieByScreenSize())
        }
    }, [])

    return isMobile
}
