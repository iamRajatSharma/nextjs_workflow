import React from 'react'

function SidebarOption({ status, name, icon }: { status?: string, name: string, icon: any }) {
    return (
        <>
            <div className={status}>{icon} <span className='mr-3'>{name}</span></div>
        </>
    )
}

export default SidebarOption