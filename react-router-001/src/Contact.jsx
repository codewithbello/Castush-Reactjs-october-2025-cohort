import { Link } from "react-router";

const Contact = () => {
  return (
    <div>
      <h1 className="text-lg font-bold">CONTACT PAGE</h1>
      <Link to="/" className="bg-purple-500 p-1 mt-5">
        Go to Home
      </Link>
      <Link to="/about" className="bg-red-500 p-1 mt-5">
        Go to About
      </Link>
    </div>
  );
};

export default Contact;
