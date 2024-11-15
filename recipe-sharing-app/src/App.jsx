import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />

        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;