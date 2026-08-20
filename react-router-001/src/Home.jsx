import { Link } from "react-router";
const Home = () => {
  return (
    <div className="bg-blue-50">
      <h1 className="text-lg font-bold">HOME PAGE</h1>
      <div>
        <Link to="/about" className="mt-10 font-bold bg-red-500 p-1">
          About
        </Link>
        <Link to="/contact" className="bg-blue-500 p-1">
          Go to Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
