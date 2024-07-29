import Link from 'next/link'
import React from 'react'

function LoginComponent() {
    return (
        <React.Fragment>
            <div className="centered-div">
                <div className="card login-card align-middle d-flex justify-content-center align-items-center">
                    <div className="card-body">
                        <div className="login-heading">Welcome to <span className="workflo">Workflo</span> !</div>
                        <div>
                            <input type="email" placeholder="Your email" className="mt-4 custom-input form-control" />
                            <input type="password" placeholder="Password" className="mt-4 form-control custom-input" />
                            <button className="btn mt-4 login-btn">Login</button>
                            <div className="mt-4 login-bottom">
                                <span className="text-black">Don’t have an account? Create a </span>
                                <Link href="/register"><span className="" style={{ color: "#0054A1" }}>new account.</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginComponent