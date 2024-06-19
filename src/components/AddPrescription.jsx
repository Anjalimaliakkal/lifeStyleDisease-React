import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'


const AddPrescription = () => {

    const [data, setdata] = useState(
        {
            "name": "",
            "emailid": "",
            "medicine": "",
            "advice": "",
            "remarks": ""

        }
    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/AddPrescription", data).then((response) => {
            console.log(data)
            if (response.data.status == "success") {
                alert("Added Successfully")
            } else {
                alert("Error")
            }
        }).catch((error)=>{
            alert(error.message)
          })
    }
    return (
        <div style={{ backgroundImage: 'url("https://cdn.wallpapersafari.com/77/49/GmrQcB.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
         <NavBar/>
            <center><h1 style={{ color: "#0d6efd" }}>ADD  PRESCRIPTION</h1></center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">PATIENT NAME</label>
                                    <input type="text" className="form-control"placeholder='Enter Patient Name'name='name' value={data.name} onChange={inputHandler}  />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">PATIENT EMAIL</label>
                                    <input type="text" className="form-control"placeholder='Enter Patient Email'name='emailid' value={data.emailid} onChange={inputHandler}  />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">MEDICINE</label>
                                    <input type="tesxt"  id="" className="form-control"placeholder='Enter Medicine'name='medicine' value={data.medicine} onChange={inputHandler}  />

                                   

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">ADVICE</label>
                                    <textarea id="" className="form-control"placeholder='Enter Advice'name='advice' value={data.advice} onChange={inputHandler} ></textarea>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">REMARKS</label>
                                    <textarea  id="" className="form-control"placeholder='Remarks'name='remarks' value={data.remarks} onChange={inputHandler} ></textarea><br></br>

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    
                                    <button class="btn btn-primary"onClick={readValue}>ADD  PRESCRIPTION</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPrescription
