import { useLoaderData, useParams } from "react-router-dom";
// import Loader from "../components/Loader";
import { saveReadBooks, saveWishlistBooks } from "../utilities/utilities";
import { useEffect, useState } from "react";


const Book = () => {

//     const [books, setBooks] = useState([])

//     useEffect(()=>{
//         fetch('booksdata.json')
//         .then(res => res.json())
//         .then(data=> setBooks(data))
        
//     },[])

// console.log(books);

    const books = useLoaderData()

    // if (!books) {
    //     return null;
    //   }
    // const navigation = useNavigation()

    const book_id1 = useParams()
    const book_id = book_id1.book_id
    // const { book_id } = useParams()
    const bookIdNum = parseInt(book_id)
    let selectedBook = books.find(book => book.book_id === bookIdNum)
    // console.log(typeof book_id);
    // console.log(selectedBook.book_name);

    // const {author, book_id, book_name, category, image, publisher, rating, review, tags, year_of_publishing} = selectedBook

    // if(navigation.state === 'loading') return <Loader></Loader>

    const handleRead = selectedBook => {
        saveReadBooks(selectedBook)
    }

    
    const handleWishlist = selectedBook => {
        saveWishlistBooks(selectedBook)
    }

    

    return (
        <div className="container mx-auto hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <img src={selectedBook.image} />
                <div className="">
                    <h1 className="text-5xl font-bold pb-5">{selectedBook.book_name}</h1>
                    <p className="font-medium pb-5">By: {selectedBook.author}</p>
                    <hr className="border-dashed" />
                    <p className="font-medium py-4"> {selectedBook.category}</p>
                    <hr className="border-dashed" />
                    <p className="py-6"><span className="font-bold">Review:</span> {selectedBook.review}</p>
                    <div className="flex gap-3 text-[#17BE0A] font-medium">
                        <p className="text-black pr-3" >Tag</p>
                        <div><p className="px-3 rounded-lg bg-[#22be0a24]">#{selectedBook.tags[0]}</p></div>
                        <div><p className="px-3 rounded-lg bg-[#22be0a24]">#{selectedBook.tags[1]}</p></div>
                    </div>
                    <hr className="border-dashed mt-5" />
                    <div>
                        {/* table */}
                        <div className="overflow-x-auto">
                            <table className="table">
                                                               
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        
                                        <td className="text-[#131313B3]">Number of Pages:</td>
                                        <td className="font-semibold">{selectedBook.total_pages}</td>
                                        
                                    </tr>
                                    {/* row 2  */}
                                    <tr>
                                        
                                        <td className="text-[#131313B3]">Publisher:</td>
                                        <td className="font-semibold">{selectedBook.publisher}</td>
                                        
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        
                                        <td className="text-[#131313B3]">Year of Publishing:</td>
                                        <td className="font-semibold">{selectedBook.year_of_publishing}</td>
                                        
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        
                                        <td className="text-[#131313B3]">Rating:</td>
                                        <td className="font-semibold">{selectedBook.rating}</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex gap-4">
                    <button onClick={() => handleRead(selectedBook)} className="btn border-gray-300">Read</button>
                    <button onClick={() => handleWishlist(selectedBook)} className="btn text-white bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;