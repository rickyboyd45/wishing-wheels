import React from 'react'
import {Link} from 'react-router-dom'

function WheelsPage({cars}) {
  return (
    <div>
      <h3>Cars</h3>
      {cars.map((car) => (
        <p>{car.make}</p>
      ))}
      <Link to='/cars/new'><button>Create</button></Link>
      
    </div>
  )
}

export default WheelsPage
