import React from 'react'
import { useState } from 'react'
// import { Form, Button, Container, Dropdown, DropdownButton } from 'react-bootstrap'

function CreateForm({ handleCarCreate }) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    content: '',
    img_url: '',
  })
  const { make, model, year, content, img_url } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
    
      <h3>Create New Post</h3>
      <form
        onSubmit={(e) => {
        e.preventDefault()
        handleCarCreate(formData)
      }}
      >
        <label for="year">Year:</label>
        <select
          placeholder="Year"
          value={year}
          name="year"
          id="year"
          type="text"
          required
          onChange={handleChange}>
          
            <option>--Please Select--</option>
            <option>1950</option>
            <option>1951</option>
            <option>1952</option>
            <option>1953</option>
            <option>1954</option>
            <option>1955</option>
            <option>1956</option>
            <option>1957</option>
            <option>1958</option>
            <option>1959</option>
            <option>1960</option>
            <option>1961</option>
            <option>1962</option>
            <option>1963</option>
            <option>1964</option>
            <option>1965</option>
            <option>1966</option>
            <option>1967</option>
            <option>1968</option>
            <option>1969</option>
            <option>1970</option>
            <option>1971</option>
            <option>1972</option>
            <option>1973</option>
            <option>1974</option>
            <option>1975</option>
            <option>1976</option>
            <option>1977</option>
            <option>1978</option>
            <option>1979</option>
            <option>1980</option>
            <option>1981</option>
            <option>1982</option>
            <option>1983</option>
            <option>1984</option>
            <option>1985</option>
            <option>1986</option>
            <option>1987</option>
            <option>1988</option>
            <option>1989</option>
            <option>1990</option>
            <option>1991</option>
            <option>1992</option>
            <option>1993</option>
            <option>1994</option>
            <option>1995</option>
            <option>1996</option>
            <option>1997</option>
            <option>1998</option>
            <option>1999</option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
            <option>2006</option>
            <option>2007</option>
            <option>2008</option>
            <option>2009</option>
            <option>2010</option>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
          </select>

        <label>Make:</label>
        <select
          placeholder="Make"
          value={make}
          name="make"
          id="make"
          type="text"
          required
          onChange={handleChange}>
          
          <option>--Please Select--</option>
          <option > Acura </option>
          <option >Aero</option>
          <option>Alfa Romeo</option>
          <option>Aston Martin</option>
          <option>Audi</option>
          <option>Bentley</option>
          <option>BMW</option>
          <option>Bugatti</option>
          <option>Buick</option>
          <option>Cadillac</option>
          <option>Chevrolet</option>
          <option>Chrysler</option>
          <option>Cooper</option>
          <option>Daewoo</option>
          <option>Datsun</option>
          <option>DeLorean</option>
          <option>Dodge</option>
          <option>Ferrari</option>
          <option>Fiat</option>
          <option>Fisker</option>
          <option>Ford</option>
          <option>GMC</option>
          <option>Honda</option>
          <option>Hummer</option>
          <option>Hyundai</option>
          <option>Infiniti</option>
          <option>Isuzu</option>
          <option>Jaguar</option>
          <option>JEEP</option>
          <option>Kia</option>
          <option>Lamborghini</option>
          <option>Land Rover</option>
          <option>Lexus</option>
          <option>Lincoln</option>
          <option>Locust</option>
          <option>Lotus</option>
          <option>Maserati</option>
          <option>Maybach</option>
          <option>Mazda</option>
          <option>McLaren</option>
          <option>Mercedes-Benz</option>
          <option>Mercury</option>
          <option>MINI</option>
          <option>Mitsubishi</option>
          <option>Nissan</option>
          <option>Oldsmobile</option>
          <option>Packard</option>
          <option>Peugeot</option>
          <option>Plymouth</option>
          <option>Pontiac</option>
          <option>Porsche</option>
          <option>Rolls-Royce</option>
          <option>Saab</option>
          <option>Saturn</option>
          <option>Scion</option>
          <option>Smart</option>
          <option>Suzuki</option>
          <option>Tesla</option>
          <option>Toyota</option>
          <option>Volkswagen</option>
          <option>Volvo</option>
        </select>
          
        <label>Model:</label>
        <input
          placeholder="Model"
          value={model}
          name="model"
          type="text"
          required
          onChange={handleChange}
        />

        <label>Add Photo Link Here:</label>
        <input
          placeholder="Add Photo Link Here"
          value={img_url}
          name="img_url"
          type="text"
          required
          onChange={handleChange}
        />
        
        <label>What Made You Love This Vehicle?</label>
        <input
          placeholder="What Made You Love This Vehicle?"
          value={content}
          rows={8}
          name="content"
          type="text"
          required
          onChange={handleChange}
        />
        
        <button>Submit</button>

      </form>

      {/* <Container >
        <Form onSubmit={(e) => {
        e.preventDefault()
        handleCarCreate(formData)
      }}>
              
              <Form.Group className="mb-7" controlId="formBasicYear">
                <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="text"
                    name='year'
                    value={year}
                    onChange={handleChange}
                    placeholder="Year" />
          </Form.Group>
          
              <Form.Group className="mb-8" controlId="formBasicModel">
                <Form.Label>Model</Form.Label>
                  <Form.Control
                    placeholder="Model"
                    value={model}
                    name="model"
                    type="text"
                    required
                    onChange={handleChange}
                  />
                  </Form.Group>
                
              <Form.Group className="mb-9" controlId="formBasicMake">
                <Form.Label>Make</Form.Label>
                <Form.Control>
                  placeholder="Make"
                  value={make}
                  name="make"
                  id="make"
                  type="text"
                  required
                  onChange={handleChange}

            </Form.Control>
          </Form.Group>
          
              <Form.Group className="mb-10" controlId="formBasicModel">
                <Form.Label>Model</Form.Label>
                <Form.Control
          placeholder="Model"
          value={model}
          name="model"
          type="text"
          required
          onChange={handleChange}
        />
          </Form.Group>
          
              <Form.Group className="mb-11" controlId="formBasicImg">
                <Form.Label>Add Photo Link Here:</Form.Label>
                <Form.Control
          placeholder="Add Photo Link Here"
          value={img_url}
          name="img_url"
          type="text"
          required
          onChange={handleChange}
        />
              </Form.Group>

              <Form.Group className="mb-12" controlId="formBasicContent">
                <Form.Label>What Made You Love This Vehicle?</Form.Label>
                  <Form.Control
                            placeholder="What Made You Love This Vehicle?"
                            value={content}
                            rows={8}
                            name="content"
                            type="text"
                            required
                            onChange={handleChange}
                          />
              </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </Container> */}
    </div>
  );
}

export default CreateForm
