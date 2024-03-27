import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";
// import Books from "../components/Books";

const Home = () => {
    const books = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center text-4xl font-bold pt-24 pb-10">Books</h1>
            {/* <Outlet></Outlet> */}
            
            <div className="grid grid-cols-3 gap-6">
            {
                books.map(book => <Books key={book.book_id} book={book} ></Books>)
            }
            </div>
        </div>
    );
};

export default Home;