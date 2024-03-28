import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";


const ReadBookCard = ({ book }) => {

    // console.log(typeof book.book_id);

    return (
        <div className="flex">
            <div className="bg-base-200 border w-full mb-4 ">
                <div className="hero-content justify-start md:flex-grow flex-col lg:flex-row">
                    <img src={book.image} className="object-contain w-60 h-56 max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-lg md:text-2xl font-bold pb-4">{book.book_name}</h1>
                        <p className="font-medium pb-6">By: {book.author}</p>
                        <div className="flex flex-col md:flex-row gap-3 pb-5 text-[#17BE0A] font-medium">
                            <p className="text-black pr-3" >Tag</p>
                            <div><p className="px-3 inline-block rounded-lg bg-[#22be0a24]">#{book.tags[0]}</p></div>
                            <div><p className="px-3 inline-block rounded-lg bg-[#22be0a24]">#{book.tags[1]}</p></div>
                            <p className=" flex items-center gap-2 text-[#131313CC]"><CiLocationOn /> Year of Publishing: <span>{book.year_of_publishing}</span></p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <p className=" flex items-center gap-2 text-[#131313CC]"><HiOutlineUsers /> Publisher: <span>{book.publisher}</span></p>
                            <p className=" flex items-center gap-2 text-[#131313CC]"><MdOutlineContactPage /> Page <span>{book.total_pages}</span></p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex gap-4">
                            <div className="bg-[#328EFF26] text-[#328effde] flex justify-center items-center rounded-3xl">
                                <p className="px-5 text-center">Category: {book.category}</p>
                            </div>
                            <div className="bg-[#FFAC3326] text-[#ffad33ee] flex justify-center items-center rounded-3xl">
                                <p className=" text-center px-5">Rating: {book.rating}</p>
                            </div>
                            
                            <button className="btn rounded-3xl btn-primary text-white bg-[#23BE0A] border-none">
                            <Link to={`/book/${book.book_id}`} >View Details</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;