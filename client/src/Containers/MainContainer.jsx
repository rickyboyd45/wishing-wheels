import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import CreateForm from '../components/CreateForm'
import EditPage from '../components/EditPage'
import Splash from '../screens/Splash'
import Wheels from '../screens/Wheels'
import { deleteCar, getAllCars, postCar, putCar } from '../services/car'

function MainContainer() {
  const [cars, setCars] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchCars = async () => {
      const carList = await getAllCars();
      setCars(carList)
    };
    fetchCars();
  }, [])

  const handleCarCreate = async (formData) => {
    const newCar = await postCar(formData);
    setCars((prevState) => [...prevState, newCar]);
    history.push('/cars');
  }

  const handleCarDelete = async (id) => {
    await deleteCar(id);
    setCars(prevState=> prevState.filter(car => car.id !== id));
  }

  const handleCarUpdate = async (id, formData) => {
    const newCar = await putCar(id, formData)
    setCars(prevState => prevState.map(car => {
      return car.id ===id ? newCar : car
    }))
    history.push('/cars');
  }

  return (
    <div>
      <Switch>
        <Route path='/cars/:id/edit'><EditPage cars={cars} handleCarUpdate={handleCarUpdate}/></Route>

        <Route path='/cars/new'><CreateForm handleCarCreate={handleCarCreate}/></Route>
        
        <Route path='/cars'><Wheels cars={cars} handleCarDelete={handleCarDelete} /></Route>

        <Route path='/'>
          <Splash/>
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
