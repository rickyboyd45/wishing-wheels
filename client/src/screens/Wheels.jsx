import React from 'react'
import WheelsPage from '../components/WheelsPage'


function Wheels({cars, handleCarDelete, currentUser}) {
  return (
    <div>
      <WheelsPage cars={cars} handleCarDelete={handleCarDelete} currentUser={currentUser}/>
    </div>
  )
}

export default Wheels
