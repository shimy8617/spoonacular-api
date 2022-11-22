import { Outlet } from "react-router-dom";
import { useState } from "react";

import { getRecipes } from "../../services/getData.js";

import "./Home.css";

export const Home = () => {
  const [selected, setSelected] = useState("");

  const container = document.querySelector("#recipes");
  const loader = document.getElementById("recipeInfo");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const recipesList = async (number = 10, value = setSelected) => {
    loader.style.display = "grid";
    const { results } = await getRecipes(number, value);
    console.log(results);
    loader.style.display = "none";
    results.forEach((recipes) => {
      const article = document.createElement("article");
      article.setAttribute("class", "recipes");
      article.innerHTML = `
      <img src='${recipes.image}' alt=''>
      <h2>${recipes.title}</h2>
      <div>
        <p>${recipes.pricePerServing}</p>
        <p>${recipes.id}</p>
      </div>
      <a href="/#/${recipes.id}">Ver detalle
                </a>
    `;
      container.appendChild(article);
    });
  };

  recipesList();

  /* window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
    localStorage.setItem("charID", id);
    window.location.replace("/character.html");
  }); */

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
        <div id="recipes">
          <div id="recipeInfo"></div>
        </div>
      </div>
    </>
  );
};
