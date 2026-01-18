// App.jsx
import React from "react";
// Import the named export using curly braces
import { CustomButton } from "./assets/CustomButton";
import { Contact } from "./assets/Contact";
import { NewsLetter } from "./assets/NewsLetter";

function App() {
  return (
    <div>
      <Contact />
      <NewsLetter />
      <h1>Welcome to React</h1>
      <CustomButton />
    </div>
  );
}

export default App;