import React, { useState } from "react";
import SearchBox from "../../components/SearchBox";


import Button from '@mui/material/Button';
import Badge from '../../components/Badge';


import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


const Orders = () => {
    const[isOpenOrderProduct,setOpenOrderProduct] = useState(null);


    const isShowOrderProducts =(index)=>{
        if(isOpenOrderProduct === index){
         setOpenOrderProduct(null)
        }else{
         setOpenOrderProduct(index)
        }
       }





  return (
    <>
      <div className="card p-3 bg-white shadow-md rounded-sm flex items-center justify-between">
        <h1 className="font-[700] text-[22px] text-gray-800">orders</h1>
        <div className="w-[35%] ml-auto pr-2">
          <SearchBox />
        </div>
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-[18px] font-[600]">Recent Orders</h3>
        </div>

        <div className="col1 w-full lg:w-[100%] ">
          <div className="bg-white shadow-md rounded-md py-2">
            <div className="px-3 border-b border-[#ccc]">
              {/* this table is getting form preline website */}
              <div className="flex flex-col mt-5">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            ></th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Order Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Payment Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Phone Number
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                            >
                              Address
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                            >
                              PinCode
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Total Amount
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              User Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3  whitespace-nowrap text-center text-xs font-medium text-gray-500 uppercase"
                            >
                              Order Status
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* first row */}
                          <tr className="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <Button
                                onClick={() => isShowOrderProducts(0)}
                                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                              >
                                {isOpenOrderProduct === 0 ? (
                                  <FaAngleUp />
                                ) : (
                                  <FaAngleDown />
                                )}
                              </Button>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <span className="text-[var(--primary)] font-[600]">
                                1cnm81u2y984y19823ry
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <span className="text-[var(--primary)] font-[600]">
                                PAY_1u2y984y198
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              John Brown
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              9090909090
                            </td>
                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                              <span className="block w-[300px]">
                                Flat 10, Green Heights Apartments, 2nd Cross, MG
                                Road, Ashok Nagar, Bengaluru, Karnataka 560001,
                                India
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              332002
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              $300
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              Test@gmail.com
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <span className="text-[var(--primary)] font-[600]">
                                4nc9ufw984893974r30
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <Badge status="delivered" />
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              20-4-2026
                            </td>
                          </tr>

                          {isOpenOrderProduct === 0 && (
                            <tr>
                              <td className=" pl-20" colSpan={6}>
                                <div className="-m-1.5 overflow-x-auto">
                                  <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="overflow-hidden">
                                      <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                          <tr>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Product Id
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Product Title
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Image
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Quantity
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Price
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Sub Total
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="odd:bg-white ">
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <span className="text-[var(--primary)] font-[600]">
                                                1cnm81u2y984y19823ry
                                              </span>
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              Orange with lemon juice
                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <img
                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                src={RowImg}
                                                alt=""
                                              />
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              1
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                              $300
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              $320
                                            </td>
                                          </tr>
                                          <tr className="odd:bg-white ">
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <span className="text-[var(--primary)] font-[600]">
                                                1cnm81u2y984y19823ry
                                              </span>
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              Orange with lemon juice
                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <img
                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                src={RowImg}
                                                alt=""
                                              />
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              1
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                              $300
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              $320
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}

                          {/* second row */}

                          <tr className="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <Button
                                onClick={() => isShowOrderProducts(1)}
                                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                              >
                                {isOpenOrderProduct === 1 ? (
                                  <FaAngleUp />
                                ) : (
                                  <FaAngleDown />
                                )}
                              </Button>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <span className="text-[var(--primary)] font-[600]">
                                1cnm81u2y984y19823ry
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <span className="text-[var(--primary)] font-[600]">
                                PAY_1u2y984y198
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              John Brown
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              9090909090
                            </td>
                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                              <span className="block w-[300px]">
                                Flat 10, Green Heights Apartments, 2nd Cross, MG
                                Road, Ashok Nagar, Bengaluru, Karnataka 560001,
                                India
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              332002
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              $300
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              Test@gmail.com
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <span className="text-[var(--primary)] font-[600]">
                                4nc9ufw984893974r30
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              <Badge status="delivered" />
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                              20-4-2026
                            </td>
                          </tr>

                          {isOpenOrderProduct === 1 && (
                            <tr>
                              <td className=" pl-20" colSpan={6}>
                                <div className="-m-1.5 overflow-x-auto">
                                  <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="overflow-hidden">
                                      <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                          <tr>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Product Id
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Product Title
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Image
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Quantity
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Price
                                            </th>
                                            <th
                                              scope="col"
                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                            >
                                              Sub Total
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="odd:bg-white ">
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <span className="text-[var(--primary)] font-[600]">
                                                1cnm81u2y984y19823ry
                                              </span>
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              Orange with lemon juice
                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <img
                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                src={RowImg}
                                                alt=""
                                              />
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              1
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                              $300
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              $320
                                            </td>
                                          </tr>
                                          <tr className="odd:bg-white ">
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <span className="text-[var(--primary)] font-[600]">
                                                1cnm81u2y984y19823ry
                                              </span>
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              Orange with lemon juice
                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              <img
                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                src={RowImg}
                                                alt=""
                                              />
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              1
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                              $300
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                              $320
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
