import { useState } from "react";

import WelcomeMessage from "./WelcomeMessage";

function App() {
  const [count, setCount] = useState(0);

  return <WelcomeMessage />;
}

export default App;
