import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <div className="mt-16 max-w-[90%] mx-auto hero bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse gap-20">
                <img src={banner} className="max-h-60 md:max-w-xs rounded-lg" />
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className="md:leading-[60px] max-w-md pb-6 text-2xl md:text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                    
                    <a href="/listed-books">
                    <button className="btn text-xl font-bold text-white bg-[#17BE0A] border-none btn-primary">View The List</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;