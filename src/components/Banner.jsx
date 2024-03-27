import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <div className="w-full mx-auto hero bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse gap-20">
                <img src={banner} className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="font-playfare leading-[84px] max-w-lg pb-6 text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                    
                    <a href="/listed-books">
                    <button className="btn text-xl font-bold text-white bg-[#17BE0A] border-none btn-primary">View The List</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;