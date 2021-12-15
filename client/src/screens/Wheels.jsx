import React from 'react'
import WheelsPage from '../components/WheelsPage'


function Wheels({cars, handleCarDelete}) {
  return (
    <div>
      <WheelsPage cars={cars} handleCarDelete={handleCarDelete}/>
    </div>
  )
}

export default Wheels
