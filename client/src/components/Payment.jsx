import Navbar from "./Navbar";
import { useService } from "../contexts/services";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentPage, setPaymentPage] = useState("");
  const [serviceDetail, setServiceDetail] = useState({});

  const service = useService();

  const getService = () => {
    const serviceName = localStorage.getItem("service");
    if (serviceName === "ล้างแอร์") {
      setPaymentPage(airCleanPayment);
      setServiceDetail(service.services[0]);
    } else {
      setPaymentPage(initialPage);
    }
  };
  // airClean
  const [amountFirstBTU, setAmountFirstBTU] = useState(0);
  const [amountSecondBTU, setAmountSecondBTU] = useState(0);

  useEffect(() => {
    if (service.services === null) {
      navigate("/services");
    } else {
      getService();
    }
  }, [amountFirstBTU, amountSecondBTU]);

  const airCleanPayment = (
    <>
      <div className=" bg-grey-100 h-screen z-[-1] ">
        <div
          className={`z-[0] h-[240px] relative w-full flex flex-col justify-center items-center  bg-no-repeat bg-cover bg-center bg-[url('${serviceDetail.service_image}')]`}
        >
          <div className="z-[0] absolute h-[240px] inset-0 bg-blue-950 opacity-60 "></div>
        </div>
        <div className="flex flex-row items-center justify-center my-11">
          <div className="w-full  flex flex-col justify-center items-center relative">
            <div className=" absolute bottom-2  bg-utils-white z-[1] font-Prompt w-[70%] h-[70px] flex flew-row justify-center items-center rounded-md">
              <div className=" absolute bottom-[150px] left-0 bg-utils-white z-[1] font-Prompt w-[300px] h-[70px] flex flew-row justify-center items-center rounded-md">
                <p className="text-grey-700">บริการของเรา</p>
                <p className="mx-5 text-grey-500">{`>`}</p>
                <h1 className="text-blue-600 text-[2rem] font-semi-bold">
                  {serviceDetail.service_name}
                </h1>
              </div>
              <p className="text-grey-700">Step</p>
            </div>
          </div>
        </div>
        <div className="w-screen flex flex-row justify-center items-center font-Prompt">
          <div className="w-[70%] flex flex-row justify-between ">
            <div className="bg-utils-white rounded-md w-[60%] p-5 flex flex-col">
              <h1 className="mb-5 text-grey-700">เลือกรายการบริการล้างแอร์</h1>
              <div className="flex flex-row justify-between">
                <div className="flex-flex-col">
                  <h3 className="text-[18px]">9,000 - 12,000 BTU</h3>
                  <p className="text-[14px] text-grey-700">800.00 / เครื่อง</p>
                </div>
                <div>
                  <button
                    className="border border-blue-600 w-[43px] h-[43px] rounded-md mr-5 text-[20px] text-blue-600"
                    onClick={() => {
                      setAmountFirstBTU((prev) => {
                        if (prev === 0) {
                          return 0;
                        } else {
                          return prev - 1;
                        }
                      });
                    }}
                  >
                    -
                  </button>
                  {amountFirstBTU}
                  <button
                    className="border border-blue-600 w-[43px] h-[43px] rounded-md mr-5 text-[20px] text-blue-600 ml-5"
                    onClick={() => {
                      setAmountFirstBTU((prev) => {
                        return prev + 1;
                      });
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <hr className="text-grey-400 my-5"></hr>
              <div className="flex flex-row justify-between">
                <div className="flex-flex-col">
                  <h3 className="text-[18px]">18,000 - 24,000 BTU</h3>
                  <p className="text-[14px] text-grey-700">
                    1,200.00 / เครื่อง
                  </p>
                </div>
                <div>
                  <button
                    className="border border-blue-600 w-[43px] h-[43px] rounded-md mr-5 text-[20px] text-blue-600"
                    onClick={() => {
                      setAmountSecondBTU((prev) => {
                        if (prev === 0) {
                          return 0;
                        } else {
                          return prev - 1;
                        }
                      });
                    }}
                  >
                    -
                  </button>
                  {amountSecondBTU}
                  <button
                    className="border border-blue-600 w-[43px] h-[43px] rounded-md mr-5 text-[20px] text-blue-600 ml-5"
                    onClick={() => {
                      setAmountSecondBTU((prev) => {
                        return prev + 1;
                      });
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <hr className="text-grey-400 my-5"></hr>
            </div>
            <div className="bg-utils-white rounded-md w-[35%] h-[100%] flex flex-col p-5 font-Prompt mr-3">
              <p className="text-grey-700">สรุปรายการ</p>
              <div className=" flex flex-row justify-between items-center mt-3">
                <div>9000 - 18000, แบบติดผนัง</div>
                <div>2 รายการ</div>
              </div>
              <div className=" flex flex-row justify-between items-center mt-3">
                <div>9000 - 18000, แบบติดผนัง</div>
                <div>2 รายการ</div>
              </div>
              <hr className="text-grey-400 my-5" />
              <div className=" flex flex-row justify-between items-center">
                <div>รวม</div>
                <div>1,600</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const initialPage = <>Initial</>;

  return (
    <div>
      <Navbar />
      {paymentPage}
    </div>
  );
};

export default Payment;
