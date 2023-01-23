import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=8849044a&app_key=bb9052a8d9d5b7ad3d63b276a7402702
  `;

  async function getRecipes() {
    var result = await axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="app">
      <h1 onClick={getRecipes}> Food Recipes 🍔 </h1>
      <form className="app__searchForm">
        <input
          type="text"
          placeholder="Enter Ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
