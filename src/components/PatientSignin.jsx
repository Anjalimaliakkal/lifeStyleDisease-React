import React from 'react'

const PatientSignin = () => {
  return (
         
        <div style={{ backgroundImage: 'url("https://cdn.wallpapersafari.com/77/49/GmrQcB.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
           <center><h1 style={{ color: '#0d6efd' }}>PATIENT LOGIN</h1></center>
        <div className="container">
        
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">MailId</label>
                                  <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                              <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary">SignIn</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientSignin