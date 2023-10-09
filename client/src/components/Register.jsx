import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "loginIdentifier") {
      setLoginIdentifier(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      loginIdentifier,
      password,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/auth/register`,
        data
      );
      console.log(response.data.message);
      if (response.data.message === "Register successful") {
        navigate("/");
      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-grey-100  ">
        <div className="w-[614px] h-[600px]  bg-utils-white flex flex-col justify-center items-center rounded-lg border border-grey-200">
          <h1 className="font-Prompt text-[32px] font-[500] leading-[48px] text-blue-950">
            ลงทะเบียน
          </h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className=" flex flex-col font-Prompt"
          >
            <div className="flex flex-col w-[400px] my-5">
              อีเมล*
              <input
                className="border rounded-md p-2 w-[100%] border-grey-300"
                type="text"
                id="loginIdentifier"
                name="loginIdentifier"
                value={loginIdentifier}
                onChange={handleChange}
                placeholder="กรุณากรอกอีเมล"
                required
              />
            </div>
            <div className="flex flex-col w-[400px] my-5">
              รหัสผ่าน*
              <input
                className="border rounded-md p-2 w-[100%] border-grey-300"
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter username or email"
                required
              />
            </div>
            <button className="text-[16px] font-[500] font-Prompt leading-[24px] text-utils-white bg-blue-600 py-[1จpx] px-[24px] rounded-[8px]  mt-8 hover:drop-shadow-md">
              <p className="py-[10px]">ลงทะเบียน</p>
            </button>
          </form>
          <span
            className="underline text-blue-600 cursor-pointer font-Prompt mt-3"
            onClick={() => navigate("/login")}
          >
            กลับไปหน้าเข้าสู่ระบบ
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
