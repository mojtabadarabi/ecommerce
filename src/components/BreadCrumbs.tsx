'use client'

import React, { ReactNode } from 'react'

import RightArrowIcon from '@/icons/RightArrowIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import tailwindConfig from 'R/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

interface Props {
    homeElement: ReactNode,
    capitalizeLinks?: boolean
}

const NextBreadcrumb = ({ homeElement, capitalizeLinks }: Props) => {
    const grayColor = resolveConfig(tailwindConfig).theme.colors.gray.DEFAULT
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)
    const listClasses = 'text-gray opacity-80'
    
    if(pathNames.length===0)return

    return (
        <ul className={'flex justify-start items-center gap-1 tex-sm'}>
            <li className={listClasses}><Link href={'/'}>{homeElement}</Link></li>
            {pathNames.length > 0 && <RightArrowIcon color={grayColor} size={18} />}
            {
                pathNames.map((link, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join('/')}`
                    const itemClasses = paths === href ? `${listClasses} ${'text-primary'}` : listClasses
                    const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && <RightArrowIcon color={grayColor} size={18} />}
                        </React.Fragment>
                    )
                })
            }
        </ul>
    )
}

export default NextBreadcrumb