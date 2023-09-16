import Sidebar from "../admin/sidebar.jsx";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function AdminCategoryCreate() {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/category", {
        category,
      });
      navigate("/admin/category");
      console.log("Created successfully", response.data);
    } catch (error) {
      console.error("Error creating category", error);
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-screen h-screen bg-grey-100">
        <div className="h-[80px] bg-utils-white flex flex-row justify-between items-center drop-shadow-md">
          <p className="text-fontHead2 font-prompt ml-[50px]">เพิ่มหมวดหมู่</p>
          <div className="space-x-5 mr-[50px]">
            <Link to="/admin/category">
              <button className="w-[112px] h-[44px] rounded-lg bg-utils-white text-blue-600 border-2 border-blue-600 font-prompt text-fontHead5 hover:bg-blue-100">
                ยกเลิก
              </button>
            </Link>
            <button
              className="w-[112px] h-[44px] rounded-lg bg-blue-600 text-utils-white font-prompt text-fontHead5 hover:bg-blue-700"
              onClick={handleSubmit}
            >
              สร้าง
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-[50px]">
          <div className="w-[90%] h-[124px] bg-utils-white border rounded-md border-grey-500 flex justify-start items-center">
            <label className="font-prompt text-grey-700 text-fontHead5 ml-[30px]">
              ชื่อหมวดหมู่<span className="text-utils-red">*</span>
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-[400px] h-[44px] border border-grey-300 font-prompt focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded ml-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryCreate;