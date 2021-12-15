import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button';

function WheelsPage({ cars, handleCarDelete }) {
  
  return (
    <div>
      {cars.map((car) => (

          <div>
            {/* <p><img src={car.img_url} alt={car.make}/></p>
            <p>{car.year}</p>
            <p>{car.make}</p>
            <p>{car.model}</p>
            <p>{car.content}</p> */}

  <Card style={{ width: '50rem' }}>
    <Card.Img variant="top" src={car.img_url} />
    <Card.Body>
      <Card.Title >{car.year} {car.model}</Card.Title>
                  <Card.Text>{car.make}</Card.Text>
                  <Card.Text>{car.content }</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to={`/cars/${car.id}/edit`}>
          <button>Edit</button>
          </Link>
          <button onClick={()=>handleCarDelete(car.id)}>Delete</button>
    </Card.Footer>
  </Card>
          
        </div>
      ))}
      
    </div>
  )
}

export default WheelsPage
