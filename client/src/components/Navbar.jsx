import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-utils-white flex flex-row justify-evenly items-center h-20 drop-shadow-xl sticky top-0 z-2">
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
          <button className="font-Prompt ml-5">บริการของเรา</button>
        </div>
        <div className="w-2"></div>
        <button
          className="py-[8px] px-[24px] font-Prompt text-blue-600 rounded-md border border-blue-600 bg-utils-white hover:bg-blue-500 hover:text-utils-white"
          onClick={() => {
            navigate("/login");
          }}
        >
          เข้าสู่ระบบ
        </button>
      </div>
      <div className="bg-utils-black h-[1px] opacity-10"></div>
    </>
  );
};
export default Navbar;
