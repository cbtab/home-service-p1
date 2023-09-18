import Navbar from "./Navbar";
import ServiceCard from "./services/ServiceCard";
import Footer from "./Footer";

const OurServices = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-grey-100">
        <div className="z-[0] h-[240px] relative w-full flex flex-col justify-center items-center  bg-no-repeat bg-cover bg-center bg-[url('https://kpxesshawklisjhmjqai.supabase.co/storage/v1/object/sign/dev-storage/images/da7550176bf1fa3b23732515a7292510.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvZGE3NTUwMTc2YmYxZmEzYjIzNzMyNTE1YTcyOTI1MTAuanBnIiwiaWF0IjoxNjk1MDI1NzA2LCJleHAiOjE3MjY1NjE3MDZ9.hAiJ9yMg2qoWobt4dH877VGeXOQKgix6A1U9d-abI1o&t=2023-09-18T08%3A28%3A27.092Z')]">
          <div className="z-[0] absolute h-[240px] inset-0 bg-blue-950 opacity-60 "></div>
          <h2 className="z-[1] text-utils-white font-Prompt text-[32px] font-[500] leading-[48px] ">
            บริการของเรา
          </h2>
          <p className="z-[1] w-[464px] text-center font-Prompt text-[16px] font-[400] leading-[24px] text-utils-white ">
            ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
            โดยพนักงานแม่บ้าน และช่างมืออาชีพ
          </p>
        </div>
        <div className="h-[84px] w-full flex flex-row justify-center items-center bg-utils-white">
          <div>
            <input
              className="font-Prompt border rounded-md border-grey-400 py-2 pl-2 w-[350px]"
              placeholder="ค้นหาบริการ..."
            ></input>
          </div>
          <div className="w-[100px]"></div>
          <div>บริการทั้งหมด</div>
          <div className="w-[100px]"></div>
          <div>ราคา</div>
          <div className="w-[100px]"></div>
          <div>เรียงตาม</div>
          <div className="w-[100px]"></div>
          <button>ค้นหา</button>
        </div>
        <div className="flex flex-row items-center justify-center my-11">
          <ServiceCard></ServiceCard>
        </div>
        <div
          className="h-[378px] w-[100%] bg-blue-600 flex flex-col justify-center items-center bg-[length:416px_416px] bg-no-repeat overflow-hidden bg-[right_100px_bottom_-50px] 
         "
          style={{
            backgroundImage: `url('https://kpxesshawklisjhmjqai.supabase.co/storage/v1/object/sign/dev-storage/images/f0733b5ff94a23b59fd5fccba21d7d98.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvZjA3MzNiNWZmOTRhMjNiNTlmZDVmY2NiYTIxZDdkOTgucG5nIiwiaWF0IjoxNjk0ODY1OTgzLCJleHAiOjE3MjY0MDE5ODN9.LDNFrq1WTY9X3cik2FMAHYDGl651dq5xf-sF3p4NXEU&t=2023-09-16T12%3A06%3A23.801Z')`,
          }}
        >
          <p className="font-Prompt text-[20px] font-[400] leading-[30px] my-5 text-utils-white text-center w-[810px]">
            เพราะเราคือช่าง ผู้ให้บริการเรื่องบ้านอันดับ 1 แบบครบวงจร
            โดยทีมช่างมืออาชีพมากกว่า 100 ทีม
            สามารถตอบโจทย์ด้านการบริการเรื่องบ้านของคุณ และสร้าง <br />
            ความสะดวกสบายในการติดต่อกับทีมช่าง ได้ทุกที่ ทุกเวลา ตลอด 24 ชม.{" "}
            <br />
            มั่นใจ ช่างไม่ทิ้งงาน พร้อมรับประกันคุณภาพงาน
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurServices;
