import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Recipe Sharing App</h1>

        {/* Search Bar */}
        <div className="search-bar">
          <SearchBar />
        </div>

        {/* Add Recipe Form */}
        <AddRecipeForm />

        {/* Favorites and Recommendations */}
        <FavoritesList />
        <RecommendationsList />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>

        {/* Optional Link to Other Page (for example, for testing) */}
        <div className="router-link">
          <a href="/">Go to Recipe List</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
