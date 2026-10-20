import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { Navigate } from "react-router-dom";


import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import Service from "./Service.jsx";

const Index = () => {

  const nav = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Router>
      <h1>Index Component</h1>

      <NavLink to="/" className={nav}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/contact" className={nav}>
        Contact
      </NavLink>
      {" | "}
      <NavLink to="/service" className={nav}>
        Service
      </NavLink>

      <Routes>
        <Route index element={<Navigate replace to="/Contact" />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default Index;
