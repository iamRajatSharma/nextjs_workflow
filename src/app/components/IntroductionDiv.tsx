import React from 'react'

function IntroductionDiv({ title, description }: { title: string, description: string }) {
    return (
        <div>
            <div className='d-flex right-side-box'>
                <div>
                    <img height={75} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7qeNixbnqDGhTUnv_XAPIDSwAug2PAXzzA&s" alt="" />
                </div>
                <div className='px-2'>
                    <div className='heading-1'>
                        {title}
                    </div>
                    <div className='desc'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionDiv