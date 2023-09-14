import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useAuth } from "./contexts/authentication";
import Admin from "./components/Admin";
import Home from "./components/Home";
const App = () => {
  const auth = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
