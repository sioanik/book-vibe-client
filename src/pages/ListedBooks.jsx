import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className="w-[90%] mx-auto">
            <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold py-14 ">Books</h3>
                <button className="btn font-semibold text-white bg-[#23BE0A]">Sort By <IoIosArrowDown /></button>
            </div>

            <div className="flex items-center mt-12 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to={''} onClick={() => setTabIndex(0)} className="{`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}">

                    <span>Read Books</span>
                </Link>
                <Link 
                to={`wishlist`} 
                onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                    <span>Wishlist Books</span>
                </Link>


            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;