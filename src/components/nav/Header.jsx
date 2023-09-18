import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <nav className="m-2">
      <div className="container mx-auto flex justify-between items-center">
        {/**Logo */}
        <div className=" text-xl font-bold">
          <a href="/">
            <img src={logo} alt="logo" className="w-50 h-50" />
          </a>
        </div>
        {/**Menu */}
        <ul className="flex space-x-8">
          {/**Menu Items */}
          <li>
            <a
              href="faq"
              className="hover:border-t-2 hover:border-gray-500"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="how-it-works"
              className="hover:border-t-2 hover:border-gray-500"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              How it Works
            </a>
          </li>
          <li>
            <a
              href="pricing"
              className="hover:border-t-2 hover:border-gray-500"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="reviews"
              className="hover:border-t-2 hover:border-gray-500"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="contact-us"
              className="text-sm hover:border-t-2 hover:border-gray-500"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href="order"
              className="text-red-500 px-2 py-1"
              style={{
                fontSize: 12,
                fontWeight: 600,
                border: "1px solid red",
                borderRadius: "15px",
              }}
            >
              ORDER NOW
            </a>
          </li>
          <li>
            <a
              href="login"
              className="hover:border-t-2 hover:border-gray-500 p-2"
              style={{
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
