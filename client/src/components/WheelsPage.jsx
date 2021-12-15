import React from 'react'
import {Link} from 'react-router-dom'

function WheelsPage({cars, handleCarDelete}) {
  return (
    <div>
      <h3>Cars</h3>
      {cars.map((car) => (

        <div>
          <p>{car.make}</p>
          <button>Edit</button>
          <button onClick={()=>handleCarDelete(car.id)}>Delete</button>
        </div>
      ))}
      <Link to='/cars/new'><button>Create</button></Link>
      
    </div>
  )
}

export default WheelsPage
