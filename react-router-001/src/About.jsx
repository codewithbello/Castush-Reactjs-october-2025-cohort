import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <h1 className="text-lg font-bold">ABOUT PAGE</h1>
      <Link to="/" className="bg-red-500 p-1 mt-5">
        Go to Home
      </Link>
      <Link to="/contact" className="bg-blue-500 p-1 mt-5">
        Go to Contact
      </Link>
    </div>
  );
};

export default About;
