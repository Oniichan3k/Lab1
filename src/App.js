import logo from "./logo.svg"
import "./App.css"
import { FaSearch } from "react-icons/fa"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Menu from "./components/Menu"
import Form from "./components/Form"

function App() {
  return (
    <>
    <div className="container-fluid bg-dark text-white">
      <Navbar/>
      <Carousel/>
      <Menu/>
      <Form/>
      </div>
    </>
  );
}

export default App;
