import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=8849044a&app_key=bb9052a8d9d5b7ad3d63b276a7402702
  `;

  async function getRecipes() {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1> Food Recipes 🍔 </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter Ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
      <div></div>
    </div>
  );
}

export default App;
