import { useState } from "react";

import WelcomeMessage from "./components/WelcomeMessage";

import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return(
  <>
  <Header/>
  <UserProfile name="Abd-UlRahman" age="29" bio="Loves hiking and photography" />;
 <MainContent/>
 <Footer/>
  </>)
}

export default App;
