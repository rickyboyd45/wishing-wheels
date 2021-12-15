import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateForm from '../components/CreateForm'
import Splash from '../screens/Splash'
import Wheels from '../screens/Wheels'
import { getAllCars } from '../services/car'

function MainContainer() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      const carList = await getAllCars();
      setCars(carList)
    };
    fetchCars();
  }, [])

  return (
    <div>
      <Switch>
        <Route path='/cars/new'><CreateForm /></Route>

        <Route path='/cars'><Wheels cars={cars}/></Route>

        <Route path='/cars/edit'></Route>

        <Route path='/'>
            <Splash/>
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
