import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Container from "./Container";

function Header() {
  let { search } = useLocation();

  return (
    <Container>
      <div className="flex justify-between items-center py-5 mx-4">
        <Logo />
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex gap-10 ">
            <Link
              to="?react"
              className={
                search === "?react"
                  ? "text-sky-500 cursor-pointer"
                  : "cursor-pointer hover:text-sky-500 transition-color duration-300"
              }
            >
              React
            </Link>
            <Link
              to="?next"
              className={
                search === "?next"
                  ? "text-sky-500 cursor-pointer"
                  : "cursor-pointer hover:text-sky-500 transition-color duration-300"
              }
            >
              Next
            </Link>
            <Link
              to="?html"
              className={
                search === "?html"
                  ? "text-sky-500 cursor-pointer"
                  : "cursor-pointer hover:text-sky-500 transition-color duration-300"
              }
            >
              Html
            </Link>
            <Link
              to="?tailwind"
              className={
                search === "?tailwind"
                  ? "text-sky-500 cursor-pointer"
                  : "cursor-pointer hover:text-sky-500 transition-color duration-300"
              }
            >
              Tailwind
            </Link>
          </div>
          <a
            href="https://thanhhainguyen-portfolio.netlify.app/"
            target="blank"
            className="border border-white bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 rounded-lg text-white hover:border hover:border-sky-500 hover:bg-gradient-to-r hover:from-transparent hover:to-transparent hover:text-sky-600 transition duration-300"
          >
            My Portfolio
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Header;
