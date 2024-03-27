import toast from "react-hot-toast"
import { json } from "react-router-dom"


// Original------------------ 

// export const getBooks = () => {
//     let books = []
//     const storedBooks = localStorage.getItem('books')
//     if (storedBooks){
//         books = JSON.parse(storedBooks)
//     }

//     return books
// }


// export const saveBooks = selectedBook => {
//     let books = getBooks()
//     const isExist = books.find(book => book.book_id === selectedBook.book_id) 
//     if (isExist){
//         return toast.error('Already in the list!')
//     }
//     books.push(selectedBook)
//     localStorage.setItem('books', JSON.stringify(books))
//     toast.success('Blog added to the list!')
// }



// for Read List ---------------- 


export const getReadBooks = () => {
    let readBooks = []
    const storedBooks = localStorage.getItem('readBooks')
    if (storedBooks){
        readBooks = JSON.parse(storedBooks)
    }

    return readBooks
}


export const saveReadBooks = selectedBook => {
    let readBooks = getReadBooks()
    const isExist = readBooks.find(book => book.book_id === selectedBook.book_id) 
    if (isExist){
        return toast.error('Already in the reading list!')
    }
    readBooks.push(selectedBook)
    localStorage.setItem('readBooks', JSON.stringify(readBooks))
    toast.success('Blog added to the reading list!')
}





// for Wishlist ---------------- 


export const getWishlistBooks = () => {
    let WishlistBooks = []
    const storedBooks = localStorage.getItem('WishlistBooks')
    if (storedBooks){
        WishlistBooks = JSON.parse(storedBooks)
    }

    return WishlistBooks
}


export const saveWishlistBooks = selectedBook => {
    let WishlistBooks = getWishlistBooks()
    let readBooks = getReadBooks()

    let combined = WishlistBooks.concat(readBooks)

    const isExist = combined.find(book => book.book_id === selectedBook.book_id) 
    if (isExist){
        return toast.error('Already in the list!')
    }
    WishlistBooks.push(selectedBook)
    localStorage.setItem('WishlistBooks', JSON.stringify(WishlistBooks))
    toast.success('Blog added to the wishlist!')
}


