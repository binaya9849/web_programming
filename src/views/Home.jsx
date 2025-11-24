import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <nav>
        <div>Binaya Maharjan</div>
        <div>
          <Link to="/login">Login | Register</Link>
        </div>
      </nav>
      <h1>Welcome to the My Page</h1>
      <p>My first react form page!!!!! WELCOME!!!!</p>
      <h4> Please hover on the login | Register located in the navbar to proceed</h4>
    </div>
  );
};

export default Home;
