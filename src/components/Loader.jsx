import { ScaleLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <ScaleLoader size={100}></ScaleLoader>
        </div>
    );
};

export default Loader;