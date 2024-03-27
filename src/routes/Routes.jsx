import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
// import Books from "../components/Books";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import Book from "../pages/Book";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
import ErrorPage from "../components/ErrorPage";
import Upcoming from "../pages/Upcoming";
import BestAuthors from "../pages/BestAuthors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('booksdata.json')
                // children: [
                //     {
                //         index: true,
                //         element: <Books></Books>,
                //         loader: () => fetch('booksdata.json')
                //     }
                // ]
            },
            {
                path:"/listed-books",
                element: <ListedBooks></ListedBooks>,
                children:[
                    {
                        index: true,
                        element: <ReadBooks></ReadBooks>,
                    },
                    {
                        path: 'wishlist',
                        element: <WishlistBooks></WishlistBooks>
                    }
                ]
            },
            {
                path:"/pages-to-read",
                element: <PagesToRead></PagesToRead>
            },
            {
                path:"/upcoming",
                element: <Upcoming></Upcoming>
            },
            {
                path:"/best-authors",
                element: <BestAuthors></BestAuthors>
            },
            {
                path:'/book/:book_id',
                element:<Book></Book>,
                loader:() => fetch('booksdata.json')
            }
        ]
    },
]);

export default router;