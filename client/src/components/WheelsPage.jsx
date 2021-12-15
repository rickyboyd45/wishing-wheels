import React from 'react'
import {Link} from 'react-router-dom'

function WheelsPage({ cars, handleCarDelete }) {
  
  return (
    <div>
      {cars.map((car) => (
        <div className='car__card'>
          <div >
            <p><img src={car.img_url} alt={car.make}/></p>
          <p>{car.year}</p>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.content}</p>
          </div>

          <Link to={`/cars/${car.id}/edit`}>
          <button>Edit</button>
          </Link>
          <button onClick={()=>handleCarDelete(car.id)}>Delete</button>
        </div>
      ))}
      <Link to='/cars/new'><button>Create</button></Link>
      
    </div>
  )
}

export default WheelsPage
