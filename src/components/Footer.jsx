import { FaFacebookF, FaPhone } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiZalo } from "react-icons/si";
import Container from "./Container";
import Logo from "./Logo";

function Footer() {
  return (
    <Container>
      <div className="py-12 border-t border-t-primary-black flex flex-wrap mx-4">
        <div className="w-full md:w-1/2">
          <Logo />
          <p className="mt-10 text-sm">Learn For Free And Share For Free - By Thanh Hai Nguyen</p>
        </div>
        <div className="w-full md:w-1/2 pt-10 md:pt-0 flex md:justify-end">
          <div className="flex flex-col justify-between md:items-end">
            <ul className="flex gap-5">
              <li>
                <a
                  href="https://www.facebook.com/ngthanhhai.1707"
                  target="blank"
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <FaFacebookF className="text-white" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://zalo.me/0868902048" target="blank">
                  <div className="bg-sky-600 p-2 rounded-full">
                    <SiZalo className="text-white" />
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:0868902048">
                  <div className="bg-red-600 p-2 rounded-full">
                    <FaPhone className="text-white" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/hai179707" target="blank">
                  <div className="bg-slate-700 p-2 rounded-full">
                    <FiGithub className="text-white" />
                  </div>
                </a>
              </li>
            </ul>
            <div>
              <ul className="pt-10 flex gap-10 text-sm">
                <li>
                  <a
                    href="https://thanhhainguyen-portfolio.netlify.app/"
                    target="blank"
                  >
                    My Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://thanhhainguyen-portfolio.netlify.app/"
                    target="blank"
                  >
                    My CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
