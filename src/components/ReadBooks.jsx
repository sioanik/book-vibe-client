
import { getReadBooks } from "../utilities/utilities";
import ReadBookCard from "./ReadBookCard";

const ReadBooks = () => {

    const readBooksList = getReadBooks()
    console.log(readBooksList);
    // readBooksList.map(book => )

    return (
        <div>
            
            {
                readBooksList.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
            }
            
            
            
        </div>
    );
};

export default ReadBooks;