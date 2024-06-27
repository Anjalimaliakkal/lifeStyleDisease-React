import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SignUpPatient = () => {
    const [data, SetData] = useState(
        {
            "name": "",
            "emailid": "",
            "address": "",
            "phone": "",
            "bloodgrp": "",
            "disease": "",
            "diagnosis":"",
            "password": "",
            "confirmpassword": ""
        }
    )
    const inputHandler = (event) => {
        SetData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        if (data.password == data.confirmpassword) {
            axios.post("http://localhost:8080/signUp", data).then((response) => {
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
            <NavBar/>
            <center>
                
                <h1 style={{ color: '#2276bf' }}>PATIENT SIGNUP</h1></center>
            <div className="container">
                <div className="row">
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" name='name' onChange={inputHandler} value={data.name} className="form-control" placeholder='enter your name' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" name='emailid' onChange={inputHandler} value={data.emailid} className="form-control" placeholder='enter email address' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="address" id="" onChange={inputHandler} value={data.address} className="form-control" placeholder='enter address'></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" name='phone' onChange={inputHandler} value={data.phone} className="form-control" placeholder='enter phone number' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" name='age' onChange={inputHandler} value={data.age} className="form-control" placeholder='enter your age' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <select name="bloodgrp" id="" className="form-control" onChange={inputHandler} value={data.bloodgrp} >
                                <option value="Select">select</option>
                                <option value="A+">A+</option>
                                <option value="AB+">AB+</option>
                                <option value="O+">O+</option>
                                <option value="B+">B+</option>
                                <option value="A-">A-</option>
                                <option value="AB-">AB-</option>
                                <option value="B-">B-</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Disease</label>
                            <select name="disease" id="" className="form-control" onChange={inputHandler} value={data.disease} >
                                <option value="Select">select</option>
                                <option value="Pressure">Pressure</option>
                                <option value="Diabetes">Diabetes</option>
                                <option value="Cholestrol">Cholestrol</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Year of Diagnosis</label>
                            <input type="text" name="diagnosis" id="" onChange={inputHandler} value={data.diagnosis} className="form-control" placeholder='enter here' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" id="" onChange={inputHandler} value={data.password} className="form-control" placeholder='enter your password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="confirmpassword" id="" onChange={inputHandler} value={data.confirmpassword} className="form-control" placeholder='confirm the password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center><button className="btn btn-primary" onClick={readValue} >SIGN UP</button></center>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/SignInPatient" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click to Login</a></p>
                            </div>
                    </div>
                </div>
            </div></div>
    )
}

export default SignUpPatient
