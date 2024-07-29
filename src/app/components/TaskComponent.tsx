import React from 'react'
import { FaClock } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { IoFilterSharp } from 'react-icons/io5'

function TaskComponent({ heading, title, description, type, date }: { heading: string, title: string, description: string, type: string, date: string }) {
    return (
        <div>
            <div className='m-3'>
                <div className='d-flex justify-content-between mb-3'>
                    <div style={{ fontWeight: 600, fontSize: 22 }}>{heading}</div>
                    <div><IoFilterSharp /></div>
                </div>
                <div className='card p-3'>
                    <div className='card-heading'>
                        {title}
                    </div>
                    <div className='card-desc'>
                        {description}
                    </div>
                    <div className='py-2'>
                        <button className='btn btn-status'>{type}</button>
                    </div>
                    <div>
                        <FaClock /> {date}
                    </div>
                    <div className='mt-3'>
                        <h5>1 hour ago</h5>
                    </div>
                </div>
                <div className='mt-3'>
                    <button className='d-flex justify-content-between w-100 btn btn-block bg-black text-white'>
                        <div> Add new</div>
                        <div><IoIosAddCircle size={24} /></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskComponent