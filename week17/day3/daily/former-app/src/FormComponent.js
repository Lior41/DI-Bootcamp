import React, { useState } from 'react';
import './FormComponent.css';
function FormComponent() {
 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    dietaryRestrictions: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    }
  });

 
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData(prevFormData => ({
        ...prevFormData,
        dietaryRestrictions: {
          ...prevFormData.dietaryRestrictions,
          [name]: checked
        }
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };


  return (
    <div>
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">Please Choose a destination</option>
          <option value="japan">Japan</option>
       
        </select>
        <div>
          Dietary restrictions:
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.dietaryRestrictions.nutsFree}
              onChange={handleChange}
            />
            Nuts free
          </label>
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.dietaryRestrictions.lactoseFree}
              onChange={handleChange}
            />
            Lactose free
          </label>
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={formData.dietaryRestrictions.vegan}
              onChange={handleChange}
            />
            Vegan
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        Entered information:
        <p>Your name: {`${formData.firstName} ${formData.lastName}`}</p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination: {formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <ul>
          <li>Nuts free : {formData.dietaryRestrictions.nutsFree ? 'Yes' : 'No'}</li>
          <li>Lactose free : {formData.dietaryRestrictions.lactoseFree ? 'Yes' : 'No'}</li>
          <li>Vegan meal : {formData.dietaryRestrictions.vegan ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    </div>
  );
}

export default FormComponent;
