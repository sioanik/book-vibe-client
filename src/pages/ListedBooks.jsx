import { IoIosArrowDown } from "react-icons/io";
import { getReadBooks, getWishlistBooks, readSortPages, readSortRating, readSortYear } from "../utilities/utilities";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ReadBookCard from "../components/ReadBookCard";
import WishlistBookCard from "../components/WishlistBookCard";
import { useState } from "react";

const ListedBooks = () => {
    // const [tabIndex, setTabIndex] = useState(0)
    // const [sort, setSort] = useState('rating')

    // const handleRating = () => {
    //     // console.log('rating');
    //     setSort('rating')
    // }
    // const handlePages = () => {
    //     // console.log('pages');
    //     setSort('pages')
    // }
    //-----------------------sort

    const ratingSortBooksList = readSortRating()
    const pagesSortBooksList = readSortPages()
    const yearSortBookList = readSortYear()

    const [stateSort, setStateSort] = useState(ratingSortBooksList)

    const handleRating = () => {
        // console.log('rating');
        setStateSort([...ratingSortBooksList])
    }

    const handlePages = () => {
        // console.log('pages');
        setStateSort([...pagesSortBooksList])
    }

    const handleYear = () => {
        // console.log('pages');
        setStateSort([...yearSortBookList])
    }

    // useEffect(() => {
    //     if (sort.sort === 'rating') {
    //         setStateSort(ratingSortBooksList);
    //     } else if (sort.sort === 'pages') {
    //         setStateSort(pagesSortBooksList);
    //     } 
    //     else {
    //         setStateSort(readBooksList);
    //     }
    // }, [sort])

    // console.log(stateSort);


    // ----------------------tabs
    // const readBooksList = getReadBooks()
    const wishList = getWishlistBooks()

    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold py-14 ">Books</h3>
                {/* <button className="btn font-semibold text-white bg-[#23BE0A]">Sort By <IoIosArrowDown /></button> */}
                <div className="mb-16 dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn text-white bg-[#23BE0A] m-1">Sort By <IoIosArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleRating}><a>Rating</a></li>
                        <li onClick={handlePages}><a>Number of pages</a></li>
                        <li onClick={handleYear}><a>Published year</a></li>
                     
                    </ul>
                </div>
            </div>

            {/* <div className="flex items-center mt-12 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to={''} onClick={() => setTabIndex(0)} className="{`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}">

                    <span>Read Books</span>
                </Link>
                <Link
                    to={`wishlist`}
                    onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                    <span>Wishlist Books</span>
                </Link>


            </div> */}

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>
                    <TabPanel>
                        {/* <h2>content1</h2> */}
                        {/* {
                            readBooksList.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
                        } */}
                        {
                            stateSort.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {/* <h2>content2</h2> */}
                        {
                            wishList.map(book => <WishlistBookCard key={book.book_id} book={book}></WishlistBookCard>)
                        }
                    </TabPanel>
                </Tabs>
            </div>



            {/* <ReadBooks sort={sort}></ReadBooks> */}
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default ListedBooks;