import { Bar } from "react-chartjs-2";
import { Input } from "../../components/Generic";
import bellIcon from "../../assets/icons/bell.svg";
import searchIcon from "../../assets/icons/search.svg";
import { barChartData, barChartOptions } from "../../utils/overview";

const RightSection = () => {
  return (
    <div className="flex flex-col w-full">
      <nav className="flex items-center justify-between w-full">
        <div className="w-3/4">
          <Input
            type="text"
            className="outline-none p-1 placeholder:font-semibold"
            placeholder="Search"
            iconLeft={searchIcon}
            aria-label="Search"
          />
        </div>
        <div className="flex justify-end w-1/4">
          <div
            className="p-2 relative cursor-pointer"
            aria-label="Notifications"
          >
            <div className="flex w-5 h-5 text-sm items-center justify-center text-white absolute top-0 right-0 bg-notfication-bg rounded-full">
              2
            </div>
            <img className="w-7" src={bellIcon} alt="Notification icon" />
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-10 h-max bg-white">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-80 text-center py-12">
          <h2 className="text-gray-500 mb-2">Your earnings this month</h2>
          <p className="text-5xl font-bold text-purple-600 mb-4">479.4</p>
          <p className="text-gray-400 mb-6">
            Update your payout method in Settings
          </p>
          <button
            className="bg-white text-active-color py-2 px-4 rounded-xl transition-all ease-linear hover:bg-active-color hover:text-white outline-none"
            aria-label="Withdraw All Earnings"
          >
            Withdraw All Earnings
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center my-12 h-max">
        <div className="flex justify-start flex-col bg-white py-5 rounded-xl shadow-xl p-6 w-80 text-center">
          <h2 className="text-black mr-auto mb-4">Affiliate Impressions</h2>
          <div className="w-full mt-4 h-max">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
