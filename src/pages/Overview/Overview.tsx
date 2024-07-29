import { Button } from "../../components/Generic";
import { CenterBox } from "./style";
import closeIcon from "../../assets/icons/i-remove.svg";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between w-full">
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
        </div>
        <div className="w-2/4 border-2 p-8 border-red-600 h-screen">
          <h1>content 2</h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;
