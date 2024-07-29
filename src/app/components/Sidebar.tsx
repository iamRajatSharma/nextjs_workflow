import React from 'react'
import { BsBrightnessHighFill } from 'react-icons/bs'
import { IoIosAddCircle, IoIosNotifications, IoIosSettings } from 'react-icons/io'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import LogoutComponent from './LogoutComponent'
import { FaHome } from 'react-icons/fa'
import { CiKeyboard } from 'react-icons/ci'
import { SiGoogleanalytics } from 'react-icons/si'
import { RiTeamFill } from 'react-icons/ri'
import Link from 'next/link'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className='col-lg-2'>
            <div className='py-2 px-2'>
                <div className='user'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7qeNixbnqDGhTUnv_XAPIDSwAug2PAXzzA&s" alt="" />
                    Rajat Sharma
                </div>
                <div className='mt-3 d-flex justify-content-between'>
                    <div>
                        <span style={{ marginRight: 7 }}><IoIosNotifications fontSize={28} /></span>
                        <span style={{ marginRight: 7 }}><BsBrightnessHighFill fontSize={28} /></span>
                        <span style={{ marginRight: 7 }}><MdKeyboardDoubleArrowRight fontSize={28} /></span>
                    </div>
                    <div>
                        <LogoutComponent />
                    </div>
                </div>
                <div className='mt-3 sidebar-options'>
                    <SidebarOption status='active' name='Home' icon={<FaHome />} />
                    <SidebarOption name='Boards' icon={<CiKeyboard />} />
                    <SidebarOption name='Setting' icon={<IoIosSettings />} />
                    <SidebarOption name='Terms' icon={<RiTeamFill />} />
                    <SidebarOption name='Analytics' icon={<SiGoogleanalytics />} />
                </div>
                <div>
                    <div style={{ width: "100%" }} className='mt-3'>
                        <Link href="/create" className='btn btn-block create-task'>Create new task <IoIosAddCircle size={24} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar