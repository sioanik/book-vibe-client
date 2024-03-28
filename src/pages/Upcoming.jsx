import { useEffect, useState } from "react";
import UpcomingCard from "../components/UpcomingCard";

const Upcoming = () => {

    const [upcomingBook, setUpcomingBook] = useState([])

    useEffect(()=>{
        fetch('/upcoming.json')
        .then(res => res.json())
        .then(data => setUpcomingBook(data))
    },[])

    

    // console.log(upcomingBook);

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold py-8 text-center">Upcoming Books!</h2>
            <p className="text-center pb-9">Explore the future of literature with our upcoming books. From gripping mysteries to heartwarming tales, find your next favorite read.</p>
            <div className="grid md:grid-cols-3 gap-10">
            {
                upcomingBook.map(book => <UpcomingCard key={book.id} book={book}></UpcomingCard>)
            }
            </div>
        </div>
    );
};

export default Upcoming;