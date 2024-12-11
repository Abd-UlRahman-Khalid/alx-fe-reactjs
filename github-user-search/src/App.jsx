import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UserProfile from "./components/UserProfile";
import UserSearch from "./components/UserSearch";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSearch />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
