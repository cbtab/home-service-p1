import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/authentication";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Navbar = () => {
  const [userValid, setUserValid] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const checkUserLogged = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = jwtDecode(token);
      const result = await axios.get(
        `http://localhost:3000/auth/${userData.user_id}`
      );
      setUserValid(result.data.data);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    checkUserLogged();
  }, []);

  return (
    <>
      <div className="bg-utils-white flex flex-row justify-evenly items-center h-20 drop-shadow-xl sticky top-0 z-[100]">
        <div className="flex flex-row">
          <div
            className="flex flex-row items-center text-fontNav font-Prompt mr-10 text-blue-600 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="mr-1 w-[32px] h-[32px] "
              src="https://kpxesshawklisjhmjqai.supabase.co/storage/v1/object/sign/dev-storage/icon/house%201.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pY29uL2hvdXNlIDEuc3ZnIiwiaWF0IjoxNjk0NzcwOTIwLCJleHAiOjE3MjYzMDY5MjB9.OgUZ8BI-O4Z0EBCe0sLeO95UpgFjAdPjHqFDxZy_Ro8&t=2023-09-15T09%3A42%3A01.422Z"
            ></img>
            HomeServices
          </div>
          <button
            className="font-Prompt ml-5"
            onClick={() => {
              navigate("/services");
            }}
          >
            บริการของเรา
          </button>
        </div>
        <div className="w-2"></div>
        {isValid ? (
          <div>
            <div
              onClick={() => {
                logout();
              }}
              className="cursor-pointer h-10 w-10 bg-contain rounded-full bg-[url('https://kpxesshawklisjhmjqai.supabase.co/storage/v1/object/sign/dev-storage/images/anonymous-avatar-icon-25.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYW5vbnltb3VzLWF2YXRhci1pY29uLTI1LmpwZyIsImlhdCI6MTY5NDkzMDEzMSwiZXhwIjoxNzI2NDY2MTMxfQ.qKplnZbmLzHvOFU614GzH3yXjfmYxuoV-mNDBgNbE80&t=2023-09-17T05%3A55%3A32.509Z')]"
            ></div>
          </div>
        ) : (
          <button
            className="py-[8px] px-[24px] font-Prompt text-blue-600 rounded-md border border-blue-600 bg-utils-white hover:bg-blue-500 hover:text-utils-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            เข้าสู่ระบบ
          </button>
        )}
      </div>
      <div className="bg-utils-black h-[1px] opacity-10"></div>
    </>
  );
};
export default Navbar;
