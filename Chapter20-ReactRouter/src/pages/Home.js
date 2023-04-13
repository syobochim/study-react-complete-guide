import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My HomePage</h1>
      <p>
        Go to <Link to="/products">The list of products</Link>.
      </p>
    </>
  );
};

export default HomePage;
