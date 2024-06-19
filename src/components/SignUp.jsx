import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div style={{ backgroundImage: 'url("https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
            <center>
                <h1 style={{ color: '#2276bf' }}>SIGN UP</h1></center>
            <div className="container">
                <div className="row">
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text"  className="form-control" placeholder='enter your name' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text"  className="form-control" placeholder='enter your email ' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea  className="form-control" placeholder='enter address'></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" n className="form-control" placeholder='enter phone number' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Specialization</label>
                            <select name="dspecialization" id="" className="form-control"  >
                                <option value="Select">select</option>
                                <option value="Surgeon">Surgeon</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Cardiologists">Cardiologists</option>
                                <option value="Endrocrinologists">Endrocrinologists</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Experience</label>
                            <input type="text"  className="form-control" placeholder='enter your experience' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password"  className="form-control" placeholder='enter your password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password"  className="form-control" placeholder='confirm the password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center><button className="btn btn-primary"  >SIGN UP</button></center>
                        </div>
                    </div>
                </div>
            </div></div>
    </div>
  )
}

export default SignUp