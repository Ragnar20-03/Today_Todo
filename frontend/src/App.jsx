import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Todo />
      <Footer />
    </>
  );
}

export default App;
