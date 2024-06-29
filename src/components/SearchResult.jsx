import axios from 'axios'
import React, { useState } from 'react'
import NavBarDoctor from './NavBarDoctor'

const SearchResult = () => {
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
        axios.post("http://localhost:8080/searchresult", data).then((response) => {
            setResult(response.data)
        }).catch()
    }
    return (
        <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/22/0d/ae/220dae820a8739860e1f451918c7ef29.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
            <center>
                <NavBarDoctor />
                <h1 style={{ color: '#2276bf' }}>SEARCH RESULTS</h1></center>
                <br></br>
            <div className="container">
                <div className="row">
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <center>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" name='emailid'  onChange={inputHandler} value={data.emailid}className="form-control" placeholder='Enter Email'   />
                        </div><br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                    <br />
                    </center>
                    <div className="row">
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Result URL</th>
                                    <th scope="col">Remarks</th>
                                </tr>
                            </thead>
                            {
                                result.map(
                                    (value, index) => {

                                        return <tbody>
                                            <tr>
                                                <th scope="row">{value.emailid}</th>
                                                <td>{value.name}</td>
                                                <td>{value.date}</td>
                                                <td><img src={value.resulturl} height="300px"/></td>
                                                <td>{value.remarks}</td>

                                            </tr>


                                        </tbody>
                                    }
                                )}
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

export default SearchResult
