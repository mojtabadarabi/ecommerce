'use client'
import useIsDeviceMobile from '@/hooks/useIsDeviceMobile'
import { Toaster } from 'react-hot-toast'
import NextBreadcrumb from '../BreadCrumbs'
import FooterDesktop from '../Footer'
import Container from './Container'
import Header from './Headers/DesktopHeader'
import MobileHeader from './Headers/MobileHeader'
import SearchField from './SearchField'

export default function Template({ children }: { children: React.ReactNode }) {
    const isMobile = useIsDeviceMobile()

    if (!isMobile || isMobile === 'true') {
        return <Container className='flex flex-col gap-5'>
            <MobileHeader />
            <SearchField />
            <NextBreadcrumb
                homeElement={'Home'}
            />
            {children}
            <Toaster />
        </Container>
    }
    return (
        <>
            <Container className='flex flex-col gap-8'>
                <Header />
                <NextBreadcrumb
                    homeElement={'Home'}
                />
                {children}
            </Container>
            <Toaster />
            <FooterDesktop />
        </>
    )
}
