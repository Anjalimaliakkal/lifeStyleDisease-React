import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'


const SignInPatient = () => {
    const [data, SetData]=useState(
        {
            "emailid": "",
            "password": ""
        }
    )
    const inputHandler=(event)=>{
        SetData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signIn",data).then((response) => {
            console.log(data)
            if (response.data.status=="success"){
                sessionStorage.setItem("token",response.data.token)
                sessionStorage.setItem("userId",response.data.userId)
                navigate("/DashboardPatient")
            } else {
                alert("Failed")
            }
        }).catch(
            (error)=>{
                console.log(error)
                alert(error)
            }
        )

            }
        let navigate = useNavigate()
    return (
        <div>
            
            <div style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
                <NavBar/>
                <center><h1 style={{ color: '#2276bf' }}>PATIENT LOGIN</h1></center>
                <div className="container">
                    <div className="row">
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text"  name='emailid' className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your email' onChange={inputHandler} value={data.emailid} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id=""    className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your password' onChange={inputHandler} value={data.password} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue} >LOGIN</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/SignUpPatient" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click to SignUp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPatient
