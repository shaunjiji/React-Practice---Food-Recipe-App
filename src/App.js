import "./App.css";
import axios from "axios";

function App() {
  var baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q='chicken'&app_id=8849044a&app_key=bb9052a8d9d5b7ad3d63b276a7402702
  `;

  async function getRecipes() {
    var result = await axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <h1>Hello Shaun</h1>
    </div>
  );
}

export default App;
