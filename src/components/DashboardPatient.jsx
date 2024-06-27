import React from 'react'
import NavBarPatient from './NavBarPatient'

const DashboardPatient = () => {
  return (
    <div>
      <NavBarPatient/>
      <div style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}></div>
    </div>
  )
}

export default DashboardPatient
