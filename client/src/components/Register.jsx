const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-grey-100  ">
      <div className="w-[614px] h-[600px]  bg-utils-white flex flex-col justify-center items-center rounded-lg border border-grey-200">
        <h1 className="font-Prompt text-[32px] font-[500] leading-[48px] text-blue-950">
          เข้าสู่ระบบ
        </h1>
        <form onSubmit={handleSubmit} className=" flex flex-col font-Prompt">
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
            <p className="py-[10px]">เข้าสู่ระบบ</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
