import { getWishlistBooks } from "../utilities/utilities";
import WishlistBookCard from "./WishlistBookCard";

const WishlistBooks = () => {

    const wishList = getWishlistBooks()
    console.log(wishList);

    return (
        <div>
            {
                wishList.map(book => <WishlistBookCard key={book.book_id} book={book}></WishlistBookCard>)
            }
        </div>
    );
};

export default WishlistBooks;