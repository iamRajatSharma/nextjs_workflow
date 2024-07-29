import Link from 'next/link'
import React from 'react'

function LogoutComponent() {
    return (
        <>
            <Link href='/' className='text-black logout-btn p-2'>Logout</Link>
        </>
    )
}

export default LogoutComponent