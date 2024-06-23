import axios from 'axios'
import React, { useState } from 'react'


const SignIn = () => {
    const [data, SetData]=useState(
        {
            "dmail": "",
            "dpassword": ""
        }
    )
    const inputHandler=(event)=>{
        SetData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/dsignin",data).then((response) => {
            console.log(data)
            if (response.data.status=="success"){
                sessionStorage.setItem("token",response.data.token)
                sessionStorage.setItem("userId",response.data.userId)
                
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
        
  return (
    <div>
        <div>
            <div style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
                <center><h1 style={{ color: '#2276bf' }}>SIGNIN</h1></center>
                <div className="container">
                    <div className="row">
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text"  name='dmail' className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your email' onChange={inputHandler} value={data.dmail} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="dpassword" id=""    className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your password' onChange={inputHandler} value={data.dpassword} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue} >SignIn</button>
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