import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SignUpdoctor = () => {
    const [data, SetData] = useState(
        {
            "dname": "",
            "dmail": "",
            "daddress": "",
            "dphone": "",
            "dspecialization": "",
            "dexperience": "",
            "dpassword": "",
            "dconfirmpassword": "",
        }
    )
    const inputHandler = (event) => {
        SetData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        if (data.dpassword == data.dconfirmpassword) {
            axios.post("http://localhost:8080/dsignup", data).then((response) => {
                console.log(data)
                if (response.data.status == "success") {
                    alert("successfully signed up")
                } else {
                    alert("error")
                }
            }).catch()
        } else {
            alert("password incorrect")
        }
    }
    return (

        <div style={{ backgroundImage: 'url("https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
            <center>
                <NavBar/>
                <h1 style={{ color: '#2276bf' }}>DOCTOR SIGNUP</h1></center>
            <div className="container">
                <div className="row">
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" name='dname' onChange={inputHandler} value={data.dname} className="form-control" placeholder='enter your name' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" name='dmail' onChange={inputHandler} value={data.dmail} className="form-control" placeholder='enter the email address' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="daddress" id="" onChange={inputHandler} value={data.daddress} className="form-control" placeholder='enter address'></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" name='dphone' onChange={inputHandler} value={data.dphone} className="form-control" placeholder='enter phone number' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Specialization</label>
                            <select name="dspecialization" id="" className="form-control" onChange={inputHandler} value={data.dspecialization} >
                                <option value="Select">select</option>
                                <option value="Surgeon">Surgeon</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Cardiologists">Cardiologists</option>
                                <option value="Endrocrinologists">Endrocrinologists</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Experience</label>
                            <input type="text" name='dexperience' onChange={inputHandler} value={data.dexperience} className="form-control" placeholder='enter your experience' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="dpassword" id="" onChange={inputHandler} value={data.dpassword} className="form-control" placeholder='enter your password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="dconfirmpassword" id="" onChange={inputHandler} value={data.dconfirmpassword} className="form-control" placeholder='confirm the password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center><button className="btn btn-primary" onClick={readValue} >SIGN UP</button></center>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click to Login</a></p>
                            </div>
                    </div>
                </div>
            </div></div>
    )
}

export default SignUpdoctor
