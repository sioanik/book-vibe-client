import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BooksSec = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('/booksdata.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    // console.log(books);
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            {
                books.map(book => <BookCard key={book.book_id} book={book}></BookCard>)
            }
        </div>
    );
};

export default BooksSec;
















// import { Link, useLoaderData } from "react-router-dom";
// import { FaRegStar } from "react-icons/fa";


// const Books = ({book}) => {
//     // const books = useLoaderData()
//     const {author, book_id, book_name, category, image, publisher, rating, review, tags, year_of_publishing} = book
//     // console.log(tags[1]);

//     return (
//         <Link to={`/book/${book_id}`}>
//             <div className="card bg-base-100 border">
//                 <figure className="h-60"><img src={image} className="w-full h-full object-contain" /></figure>
//                 <div className="card-body">
//                     <div className="flex gap-3 text-[#17BE0A] font-medium">
//                         <div><p className="px-3 rounded-lg bg-[#22be0a24]">{tags[0]}</p></div>
//                         <div><p className="px-3 rounded-lg bg-[#22be0a24]">{tags[1]}</p></div>
//                     </div>
//                     <h2 className="text-2xl font-bold">{book_name}</h2>
//                     <p className="font-medium">By: {author}</p>
//                     <hr className="border-dashed" />
//                     <div className="card-actions justify-end">
//                         <p>{category}</p>
//                         <div>
//                             <p className="flex items-center gap-2">{rating} <FaRegStar /></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default Books;