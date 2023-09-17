import Sidebar from "../sidebar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function AdminServiceCreate() {
  const [service, setService] = useState("");
  const [existingService, setExistingService] = useState([]);
  const [serviceError, setServiceError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (existingService.map((item) => item.service).includes(service)) {
      setServiceError(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/category", {
        service,
      });
      navigate("/admin/service");
      console.log("Created successfully", response.data);
    } catch (error) {
      console.error("Error creating service", error);
    }
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3000/category");
        setExistingService(response.data.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-screen h-screen bg-grey-100">
        <div className="h-[80px] bg-utils-white flex flex-row justify-between items-center drop-shadow-md">
          <p className="text-fontHead2 font-prompt ml-[50px]">เพิ่มบริการ</p>
          <div className="space-x-5 mr-[50px]">
            <Link to="/admin/service">
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
          <div className="w-[90%] h-[124px] bg-utils-white border rounded-md border-grey-500 flex justify-start items-center relative">
            <label className="font-prompt text-grey-700 text-fontHead5 ml-[30px]">
              ชื่อบริการ<span className="text-utils-red">*</span>
            </label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-[400px] h-[44px] border border-grey-300 font-prompt focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded ml-[200px] pl-4"
            />
            {serviceError && (
              <div className="text-utils-red font-prompt text-body3 absolute left-[320px] top-[90px]">
                ชื่อบริการต้องไม่ซ้ำกัน
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminServiceCreate;
