import { useEffect, useState } from "react";
import Auth from "../form/Auth";
import Order from "../form/Order";
import Payment from "../form/Payment";
import Header from "../nav/Header";

const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= 1024 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="px-10 m-3">
      <Header />
      <div
        className="container mx-auto p-4"
        style={{ display: "flex", width: "100%", position: "relative" }}
      >
        <div style={{ width: isLargeScreen ? "60%" : "100%" }}>
          <Order />
          <Auth />
        </div>
        {isLargeScreen && (
          <div className="lg:w-40" style={{ width: "40%" }}>
            <Payment />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
