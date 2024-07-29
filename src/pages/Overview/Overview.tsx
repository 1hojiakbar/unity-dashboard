import { Button } from "../../components/Generic";
import { CenterBox } from "./style";
import closeIcon from "../../assets/icons/i-remove.svg";
import { data, items, options } from "../../utils/overview";
import { Line } from "react-chartjs-2";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between w-full overflow-scroll">
        <div className="p-8 w-3/4 h-screen">
          <div>
            <h1 className="text-xl md:text-xm lg:text-xl text-custom-dark-blue">
              Hi Tam Tran,
            </h1>
            <h1 className="md:text-3xl sm:text-2xl font-bold text-custom-dark-blue">
              Welcome back👋
            </h1>
          </div>
          <CenterBox className="rounded-xl bg-active-color h-max">
            <div className="flex items-center justify-center absolute bg-white right-2 top-2 rounded-full cursor-pointer">
              <img className="m-[9px] w-3" src={closeIcon} alt="" />
            </div>
            <h1 className="w-48 text-white font-semibold text-[24px]">
              Set a Google Analytics Code
            </h1>
            <p className="text-white text-[14px] w-48">
              Did you know you can set a Google Analytics code for your
              products?
            </p>
            <Button className="flex items-center h-10 bg-white rounded-lg p-3">
              Go Setting
            </Button>
          </CenterBox>
          <div className="flex justify-between my-12">
            <div className="max-w-sm h-max bg-white rounded-lg shadow-xl border-2 border-gray-200 overflow-hidden">
              <div className="flex flex-col px-6 py-4">
                <h2 className="font-bold text-xl mb-4">Earning by items</h2>
                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4`}
                      >
                        <div className={`${item.color} rounded-xl`}>
                          <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="w-7 h-7"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {item.title}
                        </h3>
                        <p className="text-gray-500">{item.subtitle}</p>
                      </div>
                      <div className="ml-auto text-black">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-card-bg rounded-lg w-1/2 shadow-xl border-2 border-gray-200 overflow-hidden">
              <div className="flex flex-col p-4 w-full h-full">
                <h2 className="font-bold text-xl mb-4">Earning</h2>
                <div className="flex items-center flex-col justify-around rounded-lg h-full bg-white">
                  <Line data={data} options={options} />
                  <Button className="flex items-center justify-center bg-active-color w-full py-4 rounded-2xl h-12 text-white text-md font-semibold">
                    Go Analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 border-2 p-8 border-red-600 h-screen">
          <h1>content 2</h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;
