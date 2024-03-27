const UpcomingCard = ({ book }) => {
    console.log(book);
    return (
        <div>
            <div className="card flex justify-center items-center bg-base-100 shadow-xl">
                <figure><img className="h-96 object-fill" src={book.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {book.name}
                        <div className="badge badge-secondary">Upcoming!</div>
                    </h2>
                    <p>Author: {book.author}</p>
                
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;