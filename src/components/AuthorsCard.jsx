const AuthorsCard = ({author}) => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content gap-14 flex-col lg:flex-row">
                    <img src={author.image} className="max-w-72 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{author.name}</h1>
                        <p className="py-6 text-lg">{author.about}</p>
                        <div className="flex gap-4">
                            <div className="bg-[#328EFF26] text-[#328effde] flex justify-center items-center rounded-3xl">
                                <p className="text-base px-5">Nationality: {author.nationality}</p>
                            </div>
                            <div className="bg-[#FFAC3326] text-[#ffad33ee] flex justify-center items-center rounded-3xl">
                                <p className="px-5 text-base">Language: {author.language}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorsCard;