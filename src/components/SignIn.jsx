import React from 'react'

const SignIn = () => {
  return (
    <div>
        <div>
            <div style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
                <center><h1 style={{ color: '#2276bf' }}>LOGIN</h1></center>
                <div className="container">
                    <div className="row">
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text"  className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your email'  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password"  id=""    className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your password'  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary"  >Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn