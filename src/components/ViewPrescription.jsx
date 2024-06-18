import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const ViewPrescription = () => {

    const [data,changeData] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view",data).then((response)=>{
            changeData(response.data)
            console.log(response.data)
        }).catch()
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        
        <center><h1>PRESCRIPTION</h1></center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">PATIENT ID</th>
      <th scope="col">MEDICINE</th>
      <th scope="col">ADVICE</th>
      <th scope="col">REMARK</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
               return  <tr>
               <td>{value.patientId}</td>
               <td>{value.medicine}</td>
               <td>{value.advice}</td>
               <td>{value.remark}</td>
             </tr>
             
            }
        )
    }
   
    
  </tbody>
</table>
                </div>
            </div>
        </div>

    </div>
  )
}
