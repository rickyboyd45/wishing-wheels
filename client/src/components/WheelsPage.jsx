import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button';
import '../assets/css/Wheels.css'

function WheelsPage({ cars, handleCarDelete, currentUser }) {
  
  return (
  <div className='car__cards'>
      {cars.map((car) => (
    <div className='car__card'>
      <CardGroup >
        <Card className='car__box' bg='light' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={car.img_url} />
            <Card.Body>
              <Card.Title className=''>{car.year} {car.model}</Card.Title>
                <Card.Text>{car.make}</Card.Text>
                <Card.Text>{car.content }</Card.Text>
            </Card.Body>
              <Card.Footer className='btn_3' class="d-flex justify-content-around">
                <div>

                  {currentUser &&
                  <Link to={`/cars/${car.id}/edit`}>
                    <Button style={{ height: '3rem', width: '5rem' }}variant="primary" size="sm" >Edit</Button>
                    </Link>}
                  {currentUser &&
                    <Button style={{ height: '3rem', width: '5rem' }} variant="secondary" size="sm" onClick={() => handleCarDelete(car.id)}>Delete</Button>}
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
