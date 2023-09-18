import Auth from "../form/Auth";
import Order from "../form/Order";
import Payment from "../form/Payment";
import Header from "../nav/Header";

const Home = () => {
  return (
    <div className="px-10 m-3">
      <Header />
      <div
        className="container mx-auto p-4"
        style={{ display: "flex", width: "100%", position: "relative" }}
      >
        <div style={{ width: "60%" }}>
          <Order />
          <Auth />
        </div>
        <div style={{ width: "40%" }}>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Home;
