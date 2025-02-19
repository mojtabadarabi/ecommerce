import React from 'react'

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`${className} px-4 xl:px-20 2xl:px-40`}>
            {children}
        </div>
    )
}
