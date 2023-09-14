import { useAuth } from "../contexts/authentication";
import { useEffect } from "react";
import { useNavigate } from "react-router";
const Admin = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      let data = auth.state.userData;
      console.log(data);

      // Check if adminRole is null or undefined
      if (data == null || data.role !== "admin") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };

  return <div>this is admin page</div>;
};

export default Admin;
