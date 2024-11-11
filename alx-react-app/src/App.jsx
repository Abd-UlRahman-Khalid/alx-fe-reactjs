import { useState } from "react";

import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return;
  <>
    <Header />
    <MainContent />
    <WelcomeMessage />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    <Footer />
  </>;
}

export default App;
