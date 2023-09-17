import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import { useAuth } from "./contexts/authentication";
import Admin from "./components/Admin";
import Home from "./components/Home";
import { ServiceProvider } from "./contexts/services";
import AdminCategoryCreate from "./admin/AdminCategory/AdminCategoryCreate.jsx";
import AdminCategoryEdit from "./admin/AdminCategory/AdminCategoryEdit.jsx";
import AdminService from "./admin/AdminService/AdminService.jsx";
import AdminServiceCreate from "./admin/AdminService/AdminServiceCreate.jsx";
// import AdminServiceEdit from "./admin/AdminService/AdminServiceEdit.jsx";

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
          <Route path="/admin/service" element={<AdminService />} />
          <Route
            path="/admin/service/create"
            element={<AdminServiceCreate />}
          />
          {/* <Route
            path="/admin/service/edit/:serviceId"
            element={<AdminServiceEdit />}
          /> */}
        </Routes>
      </ServiceProvider>
    </>
  );
};

export default App;
