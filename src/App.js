import './App.css';
import Employee from './components/MainPage/employee';
import { BrowserRouter, Switch, Router, Link, Route, Routes } from "react-router-dom"
import Review from './components/Review/review';
import NavBar from './components/Navbar/navbar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Employee />} />
        <Route exact path="/home" element={<Employee />} />
        <Route exact path="/review" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
