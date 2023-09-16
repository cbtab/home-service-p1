import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import { useAuth } from "./contexts/authentication";
import Admin from "./components/Admin";
import Home from "./components/Home";
import { ServiceProvider } from "./contexts/services";
import AdminCategoryCreate from "./admin/AdminCategoryCreate.jsx";
import AdminCategoryEdit from "./admin/AdminCategoryEdit.jsx";

const App = () => {
  // const auth = useAuth();
  return (
    <>
      <ServiceProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/category" element={<Admin />} />
          <Route
            path="/admin/category/create"
            element={<AdminCategoryCreate />}
          />
          <Route
            path="/admin/category/edit/:categoryId"
            element={<AdminCategoryEdit />}
          />
        </Routes>
      </ServiceProvider>
    </>
  );
};

export default App;
