import { Outlet } from "react-router-dom";
import { useState } from "react";

import { apiKey } from "../../apiKey/apiKey.js";

import "./Home.css";

const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";

const secondApi = 'apiKey=ef04f9ae17f34d709f92d66448e331ea';

export const Home = () => {
  const [selected, setSelected] = useState("");

  const getRecipes = async (number=10, value= setSelected) => {
    const res = await fetch(`${baseUrl}?${secondApi}&diet=${value}&maxFat=25&number=${number}&addRecipeInformation=true`);
    const data = await res.json();
    return data;
  }
  getRecipes();

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <>
      <Outlet />
      <div className="main">
        <h2>Select the type of food:</h2>
        <select value={selected} onChange={handleChange} name="diet" id="diet">
          <option value="">Select an option</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="dairyFree">Dairy Free</option>
          <option value="gluten-free">Gluten Free</option>
        </select>

        <div id="recipes" className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
           {getRecipes.forEach(results => 
            console.log(results)/* 
            const {image, title, pricePerServing} = results;
            <div>
            <img src={image} alt='' />
            <h4>{title}</h4>
            <p>{pricePerServing}</p>
            </div> */
          )}
          </div> 
        </div>
      </div>


      </div>
    </>
  );
};
