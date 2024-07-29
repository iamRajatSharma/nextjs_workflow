import Link from 'next/link'
import React from 'react'

function RegisterComponent() {
    return (
        <>
            <div className="centered-div">
                <div className="card login-card align-middle d-flex justify-content-center align-items-center">
                    <div className="card-body">
                        <div className="login-heading">Welcome to <span className="workflo">Workflo</span> !</div>
                        <div>
                            <input type="text" placeholder="Full Name" className="mt-4 custom-input form-control" />
                            <input type="email" placeholder="Your email" className="mt-4 form-control custom-input" />
                            <input type="password" placeholder="Password" className="mt-4 form-control custom-input" />
                            <button className="btn mt-4 login-btn">Sign Up</button>
                            <div className="mt-4 login-bottom">
                                <span>Already have an account? </span>
                                <Link href="/"><span className="" style={{ color: "#0054A1" }}>Log in</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent