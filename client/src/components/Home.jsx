import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      this is home<br></br>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        go to login
      </button>
    </div>
  );
};

export default Home;
