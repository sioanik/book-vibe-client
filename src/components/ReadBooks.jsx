
import { useEffect, useState } from "react";
import { getReadBooks, readSortPages, readSortRating } from "../utilities/utilities";
import ReadBookCard from "./ReadBookCard";

const ReadBooks = (sort) => {

    // let sort1 = sort
    const readBooksList = getReadBooks()
    const ratingSortBooksList = readSortRating()
    const pagesSortBooksList = readSortPages()
    console.log(sort.sort);

    // console.log(readBooksList);
    // console.log(ratingSortBooksList);
    // console.log(pagesSortBooksList);


  


    // const [stateSort, setStateSort] = useState([])

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


    return (
        <div>

            {/* {
                sort === 'rating' ? (
                    ratingSortBooksList.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
                ) : sort === 'pages' ? (
                    pagesSortBooksList.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
                ) : (
                    readBooksList.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
                )
            }
             */}
            {/* {
                

                stateSort.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
            } */}
            {/* {
                readBooksList.map(book => <ReadBookCard key={book.book_id} book={book}></ReadBookCard>)
            } */}

        </div>
    );
};

export default ReadBooks;