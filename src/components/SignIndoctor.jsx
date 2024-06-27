import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIndoctor = () => {

    const [data, setdata] = useState(
        {

            "dmail": "",
            "dpassword": "",

        }

    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/dsignin", data).then((Response) => {
            console.log(data)
            if (Response.data.status == "success") {
                sessionStorage.setItem("token",Response.data.token)
                sessionStorage.setItem("userid",Response.data.userid)
                navigate("/DashboardDoctor")
                
            } else {
                alert(Response.data.status)
            }
        }).catch()
    }
    let navigate=useNavigate()

  return (
    <div>
            <NavBar/>
            <div style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
                <center><h1 style={{ color: '#2276bf' }}>DOCTOR LOGIN</h1></center>
                <div className="container">
                    <div className="row">
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Doctor Email</label>
                                <input type="email" name="dmail" onChange={inputHandler} value={data.dmail} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your email' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Doctor Password</label>
                                <input type="password" name="dpassword" onChange={inputHandler} value={data.password} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your password' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>LOGIN</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/SignUpdoctor" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click to SignUp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  )
}

export default SignIndoctor
