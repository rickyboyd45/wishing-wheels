import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Splash from '../screens/Splash'
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
        <Route path='/cars'><h1>Cars List</h1></Route>

        <Route path='/create'></Route>

        <Route path='/edit'></Route>

        <Route path='/'>
            <Splash/>
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
