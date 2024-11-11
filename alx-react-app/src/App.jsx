import { useState } from "react";

import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return;
  <>
    <WelcomeMessage />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />;
  </>;
}

export default App;
