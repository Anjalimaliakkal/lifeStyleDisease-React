import React, { useState } from 'react'
import NavBarDoctor from './NavBarDoctor'
import axios from 'axios'

const Searchprescription = () => {

    const [data, searchData] = useState(
        {
            "emailid": ""
        }
    )
    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        searchData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Searchprescription", data).then((Response) => {
            setResult(Response.data)
        }).catch()
    }
    return (

        <div style={{ backgroundImage: 'url("https://cdn.wallpapersafari.com/77/49/GmrQcB.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
            <NavBarDoctor />
            <br /><br />
            <center><h1 style={{ color: "#0d6efd" }}>SEARCH PRESCRIPTION</h1></center>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col ol-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">PATIENT EMAIL</label>
                                    <input type="text" className="form-control" placeholder='Enter Patient Email' value={data.emailid} name='emailid' onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValue}>Search</button>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">PATIENT NAME</th>
                                    <th scope="col">PATIENT EMAIL</th>
                                    <th scope="col">MEDICINE</th>
                                    <th scope="col">ADVICE</th>
                                    <th scope="col">REMARK</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.emailid}</td>
                                                <td>{value.medicine}</td>
                                                <td>{value.advice}</td>
                                                <td>{value.remarks}</td>
                                            </tr>
                                        }
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <p><a href="/" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                </div>

            </div>


        </div>
    )
}

export default Searchprescription
