import { useEffect, useState } from "react";
import UpcomingCard from "../components/UpcomingCard";
import AuthorsCard from "../components/AuthorsCard";

const BestAuthors = () => {

    const [authors, setAuthors] = useState([])

    useEffect(()=>{
        fetch('./authors.json')
        .then(res => res.json())
        .then(data => setAuthors(data))
    },[])

    

    // console.log(upcomingBook);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold py-8 text-center">Best Authors</h2>
            <p className="text-center pb-9">Explore the literary world's finest with our selection of best authors. From renowned novelists to visionary poets, discover captivating stories and timeless wisdom.</p>
            <div className="">
            {
                authors.map(author => <AuthorsCard key={author.id} author={author}></AuthorsCard>)
            }
            </div>
        </div>
    );
};

export default BestAuthors;