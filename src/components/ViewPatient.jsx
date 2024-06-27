import React, { useEffect, useState } from 'react'
import NavBarDoctor from './NavBarDoctor'
import axios from 'axios'

const ViewPatient = () => {
    const [todos, changeTodos] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/viewpatient").then(
            (response) => {
                changeTodos(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBarDoctor />
            <div style={{ backgroundImage: 'url("https://cdn.wallpapersafari.com/77/49/GmrQcB.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
                <center><h1 style={{ color: "#0d6efd" }}>VIEWALL PATIENTS</h1></center>
                <br></br>
                <center>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">PHONE</th>
                                            <th scope="col">AGE</th>
                                            <th scope="col">BLOOD GROUP</th>
                                            <th scope="col">DISEASE</th>
                                            <th scope="col">YEAR OF DIAGNOSIS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.name}</th>
                                                        <td>{value.emailid}</td>
                                                        <td>{value.address}</td>
                                                        <td>{value.phone}</td>
                                                        <td>{value.age}</td>
                                                        <td>{value.bloodgrp}</td>
                                                        <td>{value.disease}</td>
                                                        <td>{value.diagnosis}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <p><a href="/" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                            </div>
                        </div>

                    </div>
                </center>


            </div>
        </div>
    )
}

export default ViewPatient
