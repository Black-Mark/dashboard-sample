import "./App.css";
import { React, useState } from 'react';
import urpic from "./urpic.png";
import { Helmet } from "react-helmet";
import { MdDashboard } from "react-icons/md";
import { TbBuildingStore } from "react-icons/tb";
import { BsFillTagsFill, BsMegaphone } from "react-icons/bs";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings, IoIosArrowDropdownCircle } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Total Sales and Transactions',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "November", "December"];

  const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: [[0, 7793], [1, 5862], [2, 3534], [3, 11210], [4, 20904.02], [5, 6253.28], [6, 387], [7, 1739], [8, 862], [9, 6561.2], [10, 0], [11, 0]],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
      },
      {
        label: 'Transactions',
        data: [[0, 12], [1, 10], [2, 8], [3, 19], [4, 38], [5, 11], [6, 2], [7, 1], [8, 2], [9, 14], [10, 0], [11, 0]],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: true,
      },
    ],
  };


  const [selectedDate, setSelectedDate] = useState(new Date(new Date().getFullYear(), 0, 1))

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="This is the Dashboard Page." />
      </Helmet>
      <div className="h-screen">
        <div className='flex h-full overflow-hidden'>
          <div className='flex flex-col w-1/6 bg-red-600'>
            <div>
              <img className='md:w-20 w-10 rounded-full mx-auto my-6' src={urpic} alt='logo' />
            </div>
            <div className="flex flex-col pr-3">
              <div>
                <button className='flex items-center w-full px-6 py-2 mb-2 gap-5 hover:bg-yellow-500 rounded-r-full 
            focus:bg-purple-950 focus:bg-opacity-50 active:bg-purple-950'>
                  <div>
                    <MdDashboard color="white" />
                  </div>
                  <div className="text-ellipsis overflow-hidden">
                    <div className='text-white text-left text-base'>
                      Dashboard
                    </div>
                  </div>
                </button>
              </div>

              <div>
                <button className='flex items-center w-full px-6 py-2 mb-2 gap-5 hover:bg-yellow-500 rounded-r-full 
            focus:bg-purple-950 focus:bg-opacity-50 active:bg-purple-950'>
                  <div>
                    <TbBuildingStore color="white" />
                  </div>
                  <div className="text-ellipsis overflow-hidden">
                    <div className='text-white text-left text-base'>
                      Branches
                    </div>
                  </div>
                </button>
              </div>

              <div>
                <button className='flex items-center w-full px-6 py-2 mb-2 gap-5 hover:bg-yellow-500 rounded-r-full 
            focus:bg-purple-950 focus:bg-opacity-50 active:bg-purple-950'>
                  <div>
                    <BsFillTagsFill color="white" />
                  </div>
                  <div className="text-ellipsis overflow-hidden">
                    <div className='text-white text-left text-base'>
                      Products
                    </div>
                  </div>
                </button>
              </div>

              <div>
                <button className='flex items-center w-full px-6 py-2 mb-2 gap-5 hover:bg-yellow-500 rounded-r-full 
            focus:bg-purple-950 focus:bg-opacity-50 active:bg-purple-950'>
                  <div>
                    <RiShoppingBag3Fill color="white" />
                  </div>
                  <div className="text-ellipsis overflow-hidden">
                    <div className='text-white text-left text-base'>
                      Orders
                    </div>
                  </div>
                </button>
              </div>

              <div>
                <button className='flex items-center w-full px-6 py-2 mb-2 gap-5 hover:bg-yellow-500 rounded-r-full 
            focus:bg-purple-950 focus:bg-opacity-50 active:bg-purple-950'>
                  <div>
                    <CgProfile color="white" />
                  </div>
                  <div className="text-ellipsis overflow-hidden">
                    <div className='text-white text-left text-base'>
                      Profile
                    </div>
                  </div>
                </button>
              </div>

              <div>
                <button className='flex items-center w-full px-6 py-2 mb-2 gap-5 hover:bg-yellow-500 rounded-r-full 
            focus:bg-purple-950 focus:bg-opacity-50 active:bg-purple-950'>
                  <div>
                    <BsMegaphone color="white" />
                  </div>
                  <div className="text-ellipsis overflow-hidden lg:whitespace-normal whitespace-nowrap">
                    <div className='text-white text-left text-base'>
                      Promotion and Vouchers
                    </div>
                  </div>
                </button>
              </div>

            </div>

            <div className="mt-auto pr-3">
              <button className='flex items-center w-full px-6 py-2 mb-2 gap-5 hover:bg-yellow-500 rounded-r-full 
            focus:bg-purple-950 focus:bg-opacity-50 active:bg-purple-950'>
                <div>
                  <IoIosSettings color="white" />
                </div>
                <div className="text-ellipsis overflow-hidden">
                  <div className='text-white text-left text-base'>
                    Settings
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="w-5/6 overflow-y-scroll">
            <div className="p-5">
              <div className="flex justify-between">
                <div className="text-red-600 text-xl font-bold uppercase">
                  Dashboard
                </div>
                <div>
                  <div className='flex item-center w-full px-5 py-2 mb-2 gap-5'>
                    <div className="relative">
                      <button>
                        <FaBell color='green' size={30} />
                      </button>
                      <div className="absolute inset-x-0 rounded-md text-center text-white top-0 bg-red-600 text-xs">
                        +99
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center text-sm justify-end'>
                        <span className="pr-1">Sumosam by Secret Kitchen</span><IoIosArrowDropdownCircle color="red" />
                      </div>
                      <div className='text-red-400 text-xs'>
                        Restaurant Admin | Claudia Ico Manlongat
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative p-5 mx-5 my-3">
                <div class="absolute top-0 right-0 flex items-center">
                  <div class="mr-3">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy"
                      showYearPicker
                      scrollableYearDropdown
                      yearDropdownItemNumber={10}
                      placeholderText={"Enter Year"}
                      className="w-20 appearance-none bg-white border border-gray-300 py-1 px-3 text-center rounded"
                      style={{ maxWidth: '180px' }}
                    />
                  </div>
                  <div class="relative">
                    <select class="bg-white border border-gray-300 py-1.5 px-3 text-center rounded leading-tight focus:outline-none focus:shadow-outline">
                      <option>Daily</option>
                      <option>Monthly</option>
                      <option>Yearly</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="px-1 pb-5">
                <div class="grid grid-cols-4 gap-4 border-b border-gray-300">
                  <div className="flex flex-col pb-2">
                    <div className="font-bold">
                      PHP 73,060.28
                    </div>
                    <div className="text-sm">
                      Total Revenue
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">
                      117
                    </div>
                    <div className="text-sm">
                      Total Orders Served
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">
                      12
                    </div>
                    <div className="text-sm">
                      Customer Served
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">
                      19
                    </div>
                    <div className="text-sm">
                      Total Products
                    </div>
                  </div>
                </div>

                <div className="text-base font-bold py-3">
                  Transactions
                </div>

                <div class="grid grid-cols-4 gap-4 border-b border-gray-300">
                  <div className="flex flex-col pb-2">
                    <div className="font-bold">
                      0
                    </div>
                    <div className="text-sm">
                      Pending
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">
                      0
                    </div>
                    <div className="text-sm">
                      Ongoing
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">
                      0
                    </div>
                    <div className="text-sm">
                      Completed
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">
                      0
                    </div>
                    <div className="text-sm">
                      Cancelled
                    </div>
                  </div>
                </div>

              </div>

              <div className="border border-gray-300 rounded px-1">
                <div className="p-2">
                  <div>
                    <div class="relative">
                      <div class="absolute top-0 right-0 flex items-center">
                        <div class="mr-3">
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="yyyy"
                            showYearPicker
                            scrollableYearDropdown
                            yearDropdownItemNumber={10}
                            placeholderText={"Enter Year"}
                            className="w-20 appearance-none bg-white border border-gray-300 py-1 px-3 text-center rounded"
                            style={{ maxWidth: '180px' }}
                          />
                        </div>
                        <div>
                          <select class="bg-white border border-gray-300 py-1.5 px-3 text-center rounded leading-tight focus:outline-none focus:shadow-outline">
                            <option>Daily</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold">
                      Total Sales and Transactions
                    </div>
                  </div>
                  <Line options={options} data={data} width={50} height={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;