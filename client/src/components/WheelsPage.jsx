import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button';
import '../assets/css/Wheels.css'

function WheelsPage({ cars, handleCarDelete }) {
  
  return (
  <div>
      {cars.map((car) => (

        <div  className='car__card' >
          <CardGroup class="mx-auto">
  <Card bg='light' style={{ width: '40rem' }}>
    <Card.Img variant="top" src={car.img_url} />
    <Card.Body>
      <Card.Title className=''>{car.year} {car.model}</Card.Title>
        <Card.Text>{car.make}</Card.Text>
        <Card.Text>{car.content }</Card.Text>
    </Card.Body>
              <Card.Footer className='btn_3' class="d-flex justify-content-around">
                
                <div>
                  <Link to={`/cars/${car.id}/edit`}>
    <Button  variant="primary" size="sm" >Edit</Button></Link>
    <Button variant="secondary" size="sm" onClick={()=>handleCarDelete(car.id)}>Delete</Button>
                </div>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
      ))}
      
  </div>
  )
}

export default WheelsPage
