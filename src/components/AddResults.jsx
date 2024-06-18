import React, { useState } from 'react'
import axios from 'axios'


const AddResults = () => {

    const [data, setdata] = useState(
        {
            "patientId": "",
            "date": "",
            "result": "",
            "remarks": ""

        }
    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add", data).then((response) => {
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
        <div style={{ backgroundImage: 'url("https://www.liveenhanced.com/wp-content/uploads/2019/02/Best-Online-Doctor-Apps.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
            <center><h1 style={{ color: "#0d6efd" }}>ADD RESULTS</h1></center>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">PATIENT ID</label>
                                    <input type="text" className="form-control"placeholder='Enter Patient ID'name='patientId' value={data.patientId} onChange={inputHandler}  />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">DATE</label>
                                    <input type="date"  id="" className="form-control"placeholder='Enter Date'name='date' value={data.date} onChange={inputHandler}  />

                                   

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">UPLOAD RESULT FILE</label>
                                    <input type="file"  id="" class="form-control"name='result' value={data.result} onChange={inputHandler} ></input>

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">REMARKS</label>
                                    <textarea  id="" className="form-control"placeholder='Remarks'name='remarks' value={data.remarks} onChange={inputHandler} ></textarea><br></br>

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    
                                    <button class="btn btn-primary" onClick={readValue}>ADD PRESCRIPTION</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddResults