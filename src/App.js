import './App.css';
import Employee from './components/employee';
import NavBar from './components/navbar';
import { BrowserRouter, Switch, Router, Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Employee />} />
        <Route exact path="/review" element={<Employee />} />
      </Routes>
    </>
  );
}

export default App;
