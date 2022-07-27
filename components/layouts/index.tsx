import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <React.Fragment>
            {/* header */}
            <main className='bg-white z-10 relative min-h-[50vh]'>
                {children}
            </main>
            {/* footer */}
        </React.Fragment>
    )
}

export default Layout