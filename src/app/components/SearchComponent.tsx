import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaFilterCircleDollar, FaSquareShareNodes } from 'react-icons/fa6'
import { IoIosAddCircle } from 'react-icons/io'
import { SiRockwellautomation } from 'react-icons/si'

function SearchComponent() {
    return (
        <div>
            <div className='d-flex justify-content-between mt-3'>
                <div>
                    <input type="text" placeholder='Search' className='custom-input form-control bg-white' />
                </div>
                <div className='d-flex justify-content-end justify-items-center align-middle'>
                    <div>Calendar View  <FaCalendarAlt /></div>
                    <div>Automation  <SiRockwellautomation /></div>
                    <div>Filter <FaFilterCircleDollar /></div>
                    <div>Share <FaSquareShareNodes /></div>
                    <div>
                        <Link href="/create" className='btn btn-block create-task'>Create new task <IoIosAddCircle size={24} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchComponent