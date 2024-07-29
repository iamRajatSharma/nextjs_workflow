import React from 'react'
import { MdHelpOutline } from "react-icons/md";
import TaskComponent from '../components/TaskComponent';
import IntroductionDiv from '../components/IntroductionDiv';
import SearchComponent from '../components/SearchComponent';
import Sidebar from '../components/Sidebar';

function page() {
    return (
        <div>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <Sidebar />
                    <div className='col-lg-10'>
                        <div className='row pb-4'>
                            <div className='col-lg-9'>
                                <h1>Good morning, Joe !</h1>
                            </div>
                            <div className='col-lg-3'>
                                <div style={{ float: "right" }}><h5>Help & feedback <MdHelpOutline /></h5></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <IntroductionDiv title="Introducing tags" description="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient." />
                            <IntroductionDiv title="Share Notes Instantly" description="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options." />
                            <IntroductionDiv title="Access Anywhere" description="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer." />
                        </div>
                        <SearchComponent />
                        <div className='d-flex justify-content-between mt-4'>
                            <TaskComponent heading='To do' title='Implement User Authentication' description='Implement User Authentication
                        Develop and integrate user authentication using email and password.' type='Urgent' date='12-12-2024' />

                            <TaskComponent heading='To do' title='Implement User Authentication' description='Implement User Authentication
                        Develop and integrate user authentication using email and password.' type='Urgent' date='12-12-2024' />

                            <TaskComponent heading='To do' title='Implement User Authentication' description='Implement User Authentication
                        Develop and integrate user authentication using email and password.' type='Urgent' date='12-12-2024' />

                            <TaskComponent heading='To do' title='Implement User Authentication' description='Implement User Authentication
                        Develop and integrate user authentication using email and password.' type='Urgent' date='12-12-2024' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page