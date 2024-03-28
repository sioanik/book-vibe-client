import { getReadBooks } from "../utilities/utilities";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {

    const readBooksList = getReadBooks()
    // console.log(readBooksList);

    const bookDetails = readBooksList.map(book => ({
        name: book.book_name,
        pages: book.total_pages
    }))
    console.log(bookDetails);
    // const bookPages = readBooksList.map(book => book.book_name)
    // console.log(bookNames);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div className="container mx-auto flex justify-center w-full">
            {/* <p>Pages to Read</p> */}
            <BarChart
                width={1200}
                height={300}
                data={bookDetails}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookDetails.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;